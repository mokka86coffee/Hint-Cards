#!/usr/bin/env node
// git tree — понятная схема истории в HTML.
// Главная ветка — верхняя дорожка, влитые ветки — под ней, со стрелками ↘ (ответвилась) и ↗ (влита).
// Читается слева направо: от старого к новому.
//
//   git tree                      последние 20 шагов главной ветки
//   git tree 50                   последние 50
//   git tree --since 2026-10-20   всё начиная с даты
//   git tree --since "2 weeks ago"
//   git tree --out ~/tree.html    сохранить в свой файл (по умолчанию — во временную папку)
//   git tree --no-open            только сохранить, не открывать браузер

const { execFileSync, spawn } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

// ---------- аргументы ----------
const args = process.argv.slice(2);
let limit = 20, since = "", outFile = "", openIt = true;
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--since" || a === "-s") since = args[++i] || "";
  else if (a.startsWith("--since=")) since = a.slice(8);
  else if (a === "--out" || a === "-o") outFile = args[++i] || "";
  else if (a === "--no-open") openIt = false;
  else if (a === "-h" || a === "--help") {
    console.log(fs.readFileSync(__filename, "utf8").split("\n").slice(1, 11).map(l => l.replace(/^\/\/ ?/, "")).join("\n"));
    process.exit(0);
  } else if (/^\d+$/.test(a)) limit = parseInt(a, 10);
}

// ---------- git ----------
const git = (...a) => execFileSync("git", a, { encoding: "utf8", maxBuffer: 256 * 1024 * 1024 }).trim();
const tryGit = (...a) => { try { return git(...a); } catch { return ""; } };

if (!tryGit("rev-parse", "--git-dir")) { console.error("Это не git-репозиторий."); process.exit(1); }

const repoName = path.basename(tryGit("rev-parse", "--show-toplevel") || process.cwd());
const branch = tryGit("rev-parse", "--abbrev-ref", "HEAD") || "HEAD";
const head = git("rev-parse", "HEAD");
const upstreamName = tryGit("rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{u}");
const upstream = upstreamName ? tryGit("rev-parse", "@{u}") : "";

const FMT = "%H%x1f%P%x1f%an%x1f%ad%x1f%s";
const parse = line => {
  const [h, p, an, ad, s] = line.split("\x1f");
  return { h, parents: (p || "").split(" ").filter(Boolean), an, ad, s };
};

const mainArgs = ["log", "--first-parent", "--date=format:%d.%m.%Y %H:%M", `--format=${FMT}`];
if (since) mainArgs.push(`--since=${since}`); else mainArgs.push(`-n${limit}`);
const main = (tryGit(...mainArgs) || "").split("\n").filter(Boolean).map(parse).reverse();

const MAX_SIDE = 6;
const mergedName = s => {
  const pull = s.match(/^Merge branch '([^']+)' of /);
  if (pull) return { name: `pull с сервера`, pull: true };
  const m = s.match(/^Merge (?:remote-tracking )?branch '([^']+)'/) || s.match(/^Merge pull request #\d+ from (\S+)/);
  return { name: m ? m[1] : "влитая ветка", pull: false };
};

// ---------- раскладка по колонкам ----------
// Каждая колонка: что на главной дорожке, что на нижней, какие стрелки.
const cols = [];
for (const c of main) {
  if (c.parents.length < 2) { cols.push({ main: c }); continue; }
  const [p1, p2] = c.parents;
  let side = (tryGit("log", "--first-parent", "--date=format:%d.%m.%Y %H:%M", `--format=${FMT}`, `${p1}..${p2}`) || "")
    .split("\n").filter(Boolean).map(parse).reverse();
  let hidden = 0;
  if (side.length > MAX_SIDE) { hidden = side.length - MAX_SIDE; side = side.slice(-MAX_SIDE); }
  const info = mergedName(c.s);
  const segStart = cols.length;
  if (!side.length) side = [null];
  side.forEach((s, i) => cols.push({ gap: true, side: s, sideName: i === 0 ? info.name : "", hidden: i === 0 ? hidden : 0, pull: info.pull, out: i === 0 }));
  cols.push({ main: c, merge: true, mergeName: info.name, pull: info.pull, segStart });
}

// ---------- HTML ----------
const esc = s => String(s).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
const badges = h => {
  const b = [];
  if (h === head) b.push(`<span class="badge here">вы здесь · ${esc(branch)}</span>`);
  if (h === upstream) b.push(`<span class="badge srv">на сервере · ${esc(upstreamName)}</span>`);
  return b.join("");
};
const card = (c, cls = "", subj = c.s) => `
  <div class="card ${cls}" title="${esc(c.s)}\n${esc(c.h)}">
    ${badges(c.h)}
    <div class="subj">${esc(subj)}</div>
    <div class="meta"><span class="hash">${c.h.slice(0, 7)}</span> · ${esc(c.an)}</div>
    <div class="meta">${esc(c.ad)}</div>
  </div>`;

let headerInfo = "";
if (upstream) {
  const ahead = tryGit("rev-list", "--count", `${upstream}..HEAD`);
  const behind = tryGit("rev-list", "--count", `HEAD..${upstream}`);
  const parts = [];
  if (ahead !== "0") parts.push(`<b>${ahead}</b> не отправлено на сервер`);
  if (behind !== "0") parts.push(`на сервере новее на <b>${behind}</b> — нужен pull`);
  headerInfo = parts.length ? parts.join(" · ") : "совпадает с сервером";
} else headerInfo = "ветка не связана с сервером";

const cells = cols.map((col, i) => {
  const first = i === 0;
  // верхняя дорожка
  let top;
  if (col.main) {
    top = `<div class="lane top ${first ? "first" : ""}">${col.merge ? card(col.main, col.pull ? "merge pull" : "merge", col.pull ? "Слил свои коммиты с серверными (pull)" : `Влита ветка ${col.mergeName}`) : card(col.main)}</div>`;
  } else {
    top = `<div class="lane top pass"></div>`;
  }
  // стрелки между дорожками
  let mid = `<div class="mid"></div>`;
  if (col.out) mid = `<div class="mid"><svg viewBox="0 0 100 60" preserveAspectRatio="none"><line x1="-40" y1="0" x2="50" y2="60" class="arrowline"/></svg><span class="tip down">↘</span></div>`;
  if (col.merge) mid = `<div class="mid"><svg viewBox="0 0 100 60" preserveAspectRatio="none"><line x1="-50" y1="60" x2="50" y2="0" class="arrowline"/></svg><span class="tip up">↗</span></div>`;
  // нижняя дорожка
  let bottom = `<div class="lane bottom"></div>`;
  if (col.gap) {
    const name = col.sideName ? `<div class="sname ${col.pull ? "pull" : ""}">${esc(col.sideName)}</div>` : "";
    const hid = col.hidden ? `<div class="hidden">…ещё ${col.hidden} раньше</div>` : "";
    const sideSubj = col.side && /^Merge /.test(col.side.s) ? `Влита ветка ${mergedName(col.side.s).name}` : col.side && col.side.s;
    const body = col.side ? card(col.side, col.pull ? "side pull" : "side", sideSubj) : `<div class="card side empty">ветка уже была в главной</div>`;
    bottom = `<div class="lane bottom on ${col.out ? "start" : ""}">${name}${hid}${body}</div>`;
  }
  return `<div class="col">${top}${mid}${bottom}</div>`;
}).join("");

const html = `<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>git tree · ${esc(repoName)} · ${esc(branch)}</title>
<style>
:root{--bg:#fbfaf7;--card:#fff;--text:#22221f;--muted:#76746c;--line:#bdb9ad;--main:#3c3489;--mainbg:#eeedfe;--side:#0f6e56;--sidebg:#e1f5ee;--pull:#993c1d;--pullbg:#faece7;--here:#185fa5;--herebg:#e6f1fb}
@media (prefers-color-scheme:dark){:root{--bg:#1b1b19;--card:#262624;--text:#ecebe5;--muted:#a19f97;--line:#57554f;--main:#afa9ec;--mainbg:#2b2758;--side:#5dcaa5;--sidebg:#0b3a30;--pull:#f0997b;--pullbg:#4a1b0c;--here:#85b7eb;--herebg:#0c2f52}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text);font:14px/1.45 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
header{position:sticky;left:0;padding:22px 28px 6px}
h1{font-size:20px;font-weight:500;margin:0 0 4px}
.sub{color:var(--muted)}
.legend{display:flex;gap:18px;flex-wrap:wrap;margin-top:10px;color:var(--muted);font-size:13px}
.legend i{display:inline-block;width:12px;height:12px;border-radius:3px;margin-right:6px;vertical-align:-1px}
.scroll{overflow-x:auto;padding:16px 28px 40px}
.grid{display:flex;align-items:stretch;width:max-content}
.col{width:210px;display:flex;flex-direction:column}
.lane{position:relative;padding:0 10px;display:flex;flex-direction:column;justify-content:flex-start}
.lane.top{min-height:150px;justify-content:flex-end}
.lane.top::before{content:"";position:absolute;left:0;right:0;bottom:44px;border-top:2px solid var(--main);opacity:.55;z-index:0}
.lane.top.first::before{left:50%}
.lane.top:not(.first)>.card::before{content:"→";position:absolute;left:-17px;bottom:33px;color:var(--main);font-size:16px}
.mid{height:60px;position:relative}
.mid svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.arrowline{stroke:var(--side);stroke-width:2;stroke-dasharray:5 4;vector-effect:non-scaling-stroke}
.tip{position:absolute;color:var(--side);font-size:18px;font-weight:600}
.tip.down{left:42%;top:30px}.tip.up{left:38%;top:-6px}
.lane.bottom{min-height:150px}
.card{position:relative;z-index:1;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:9px 11px;min-height:88px}
.card.merge{background:var(--mainbg);border-color:var(--main)}
.card.side{background:var(--sidebg);border-color:var(--side)}
.card.pull{background:var(--pullbg);border-color:var(--pull)}
.card.empty{color:var(--muted);font-size:12px;min-height:50px;display:flex;align-items:center}
.lane.bottom.on:not(.start)>.card::before{content:"→";position:absolute;left:-17px;top:33px;color:var(--side);font-size:16px}
.subj{font-weight:500;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.meta{color:var(--muted);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.hash{font-family:ui-monospace,Menlo,monospace}
.mlabel{font-size:12px;color:var(--main);margin-top:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sname{font-size:12px;color:var(--side);font-weight:600;margin-bottom:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;z-index:1}
.sname.pull{color:var(--pull)}
.hidden{font-size:11px;color:var(--muted);margin-bottom:4px}
.badge{display:inline-block;font-size:11px;border-radius:6px;padding:1px 7px;margin:0 4px 5px 0}
.badge.here{background:var(--herebg);color:var(--here);border:1px solid var(--here)}
.badge.srv{background:var(--card);color:var(--muted);border:1px dashed var(--muted)}
.empty-state{padding:28px;color:var(--muted)}
</style></head><body>
<header>
  <h1>${esc(repoName)} · ветка ${esc(branch)}</h1>
  <div class="sub">${headerInfo} · ${since ? "с " + esc(since) : "последние " + main.length + " шагов главной ветки"} · слева старое, справа новое</div>
  <div class="legend">
    <span><i style="background:var(--card);border:1px solid var(--line)"></i>коммит в главной ветке</span>
    <span><i style="background:var(--mainbg);border:1px solid var(--main)"></i>merge — сюда влили ветку</span>
    <span><i style="background:var(--sidebg);border:1px solid var(--side)"></i>коммиты влитой ветки</span>
    <span><i style="background:var(--pullbg);border:1px solid var(--pull)"></i>pull: чужие коммиты с сервера</span>
  </div>
</header>
<div class="scroll">${main.length ? `<div class="grid">${cells}</div>` : `<div class="empty-state">За этот период коммитов нет.</div>`}</div>
<script>document.querySelector('.scroll').scrollLeft = 1e9;</script>
</body></html>`;

const file = outFile
  ? path.resolve(outFile.replace(/^~(?=$|\/)/, os.homedir()))
  : path.join(os.tmpdir(), `git-tree-${repoName}-${branch.replace(/[^\w.-]+/g, "_")}.html`);
fs.writeFileSync(file, html);
console.log(`Схема: ${file}`);

if (openIt) {
  const opener = process.platform === "darwin" ? "open" : process.platform === "win32" ? "explorer" : "xdg-open";
  try { spawn(opener, [file], { detached: true, stdio: "ignore" }).unref(); } catch {}
}
