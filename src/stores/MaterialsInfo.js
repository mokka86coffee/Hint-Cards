import uuidv4 from "uuid/v4";

export default function fetchMaterials(name) {
  if (name) {
    return new Promise(r => setTimeout(() => r(Materials[name]), 0));
  }

  return new Promise(r => setTimeout(() => r(Materials), 0));
}

var Materials = {
  About: [
    {
      title: `Как использовать данный сайт`,
      text: `<t>Сайт создавался с целью<b> быстрого закрепления найденной информации, для дальнейшего использования,<t>
            без повторного поиска в интернете<br><br>
            <t>* Кликаем на карточку 2 раза, для раскрытия<br><br>
            <t>Для поиска - вводим часть фразы и 'enter'<br>
            <t>Для использования своей информации нажимаем на дискету внизу и вставляем свой текст по<b> шаблону:<br><br>
            <t>Шаблон находится в <b>репозитории<t> (клик на красную кнопку  <b>link<t> внизу карточки)
      `,
      id: uuidv4(),
      tags: "",
      link: "https://github.com/mokka86coffee/Hint-Cards"
    }
  ],
  Git: [
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `<b>1) Первый способ задать url репозитория:</b><br>
      <t>использовать команду: </t><c>  git remote set-url origin  </c><br><t>например:</t><br>
      
      <c>git remote set-url origin git@github.com:vicman-wi/wi-backend.git</c><br><br>
      
      <b>2) Второй способ:</b><br><t>
      
      Отредактировать файл </t><code>.git/config</code><t>  : секция </t><b>remote "origin"</b><t>,  параметр - </t><b>url</b>. `,
      id: uuidv4(),
      tags: "",
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как удалить директорию локально и из удаленного репо?`,
      text: `
      <b>Удаление отовсюду</b><br><br>
      <c>git rm -r FolderName   </c><t>Удаляем директорию локально</t><br>
      <c>git commit -m "Folder removed"   </c><t>Коммитим</t><br>
      <c>git push origin <your-git-branch>   </c><t>Отправляем на сервер. Обычно</t><b>'master'</b><t>, но не всегда</t><br><br>
      <b>Удаление только из удаленного репоз-я</b><br><br>
      <c>git rm -r --cached FolderName   </c><t>Удаляем директорию из удаленного репо</t><br>
      <c>git commit -m "Folder removed"   </c><t>Коммитим</t><br>
      <c>git push origin <your-git-branch>   </c><t>Отправляем на сервер. Обычно</t><b>'master'</b><t>, но не всегда</t><br><br>`,
      id: uuidv4(),
      tags: "",
      link:
        "https://stackoverflow.com/questions/6313126/how-to-remove-a-directory-from-git-repository"
    },
    {
      title: `Как удалить директорию локально и из удаленного репо?`,
      text: `<c>
      <div className={styles.asideList}>
        <div className={styles.asideList__wrap}>
          {getMaterialsThemes.map((theme, idx) => {
            const style = currentTheme == theme ? styles.chosen : null;
            return (
              <h2 className={style} onClick={this.onClick} key={idx}>
                {theme}
              </h2>
            );
          })}
        </div>
      </div></c>
      `,
      id: uuidv4(),
      tags: "",
      link:
        "https://stackoverflow.com/questions/6313126/how-to-remove-a-directory-from-git-repository"
    },
    {
      title: `Основы: снимки, стикеры, три места`,
      text: `
      <b>Коммит</b><t>— снимок проекта + ссылка на предыдущий:</t><br>
      <c>A ← B ← C</c><br>
      <b>Ветка</b><t>— просто стикер на одном коммите. Новый коммит → стикер переклеивается на него.</t><b>HEAD</b><t>— «я сейчас здесь»</t><br><br>
      <b>Три места:</b><br>
      <c>папка  →(git add)→  корзина  →(git commit)→  история</c><br>
      <t>Корзина = staging area / index. В git status: «to be committed» — в корзине, «not staged» — только в папке</t><br><br>
      <b>.gitignore</b><t>действует только на</t><b>ещё не отслеживаемые</b><t>файлы. Уже добавленные — сначала в .gitignore, потом:</t><br>
      <n>git</n><c> </c><n>rm</n><c> </c><f>-r</f><c> </c><f>--cached</f><c> </c><v>.idea</v><k>  # убрать из гита, на диске останется</k>
      `,
      id: uuidv4(),
      tags: "коммит ветка head staging index gitignore rm cached",
      link: "https://git-scm.com/book/ru/v2/Ветвление-в-Git-О-ветвлении-в-двух-словах"
    },
    {
      title: `reset: soft, mixed, hard`,
      text: `
      <t>reset</t><b>переклеивает стикер ветки</b><t>на другой коммит. Коммиты не удаляются</t><br><br>
      <c>A ← B ← C ← D        A ← B ← C ← D</c><br>
      <c>            ↑    →           ↑</c><br>
      <c>          main               main</c><br><br>
      <n>git</n><c> </c><n>reset</n><c> </c><f>--soft</f><c> </c><v>C</v><k>   # изменения D → в корзине</k><br>
      <n>git</n><c> </c><n>reset</n><c> </c><f>--mixed</f><c> </c><v>C</v><k>  # изменения D → только в папке (по умолчанию)</k><br>
      <n>git</n><c> </c><n>reset</n><c> </c><f>--hard</f><c> </c><v>C</v><k>   # изменения D → не видно нигде</k><br><br>
      <c>--soft   стикер</c><br>
      <c>--mixed  стикер + корзина</c><br>
      <c>--hard   стикер + корзина + папка</c><br><br>
      <b>Перед --hard</b><t>всё закоммитить или убрать в stash</t>
      `,
      id: uuidv4(),
      tags: "reset soft mixed hard откат",
      link: "https://git-scm.com/docs/git-reset"
    },
    {
      title: `Спасение после --hard`,
      text: `
      <b>Было в коммите</b><t>→ легко. Дневник перемещений стикера:</t><br>
      <n>git</n><c> </c><n>reflog</n><br>
      <n>git</n><c> </c><n>reset</n><c> </c><f>--hard</f><c> </c><v>f9e8d7</v><k>  # хеш нужного коммита из reflog</k><br><br>
      <b>Было только в корзине (git add)</b><t>→ можно, но вручную. Содержимое без имён файлов:</t><br>
      <n>git</n><c> </c><n>fsck</n><c> </c><f>--lost-found</f><k>  # смотреть .git/lost-found/other/</k><br><br>
      <b>Было только в папке</b><t>→ гит не поможет. Спасёт Local History в IDE (JetBrains: правой кнопкой → Local History)</t><br><br>
      <c>папка  →  корзина  →  коммит</c><br>
      <t>Чем правее, тем безопаснее</t>
      `,
      id: uuidv4(),
      tags: "reflog fsck lost-found восстановить hard local history",
      link: "https://git-scm.com/docs/git-reflog"
    },
    {
      title: `stash: стопка ящиков`,
      text: `
      <t>Убрать изменения из папки и корзины в ящик, папка станет чистой. Ящиков —</t><b>стопка</b><br><br>
      <n>git</n><c> </c><n>stash</n><c> </c><v>push</v><c> </c><f>-m</f><c> </c><v>"кнопка логина"</v><br>
      <n>git</n><c> </c><n>stash</n><c> </c><v>list</v><k>             # stash@{0} — последний, сверху</k><br>
      <n>git</n><c> </c><n>stash</n><c> </c><v>show</v><c> </c><f>-p</f><c> </c><v>stash@{1}</v><k>  # что внутри</k><br><br>
      <n>git</n><c> </c><n>stash</n><c> </c><v>pop</v><c> </c><v>stash@{1}</v><k>    # достать и убрать из стопки</k><br>
      <n>git</n><c> </c><n>stash</n><c> </c><v>apply</v><c> </c><v>stash@{1}</v><k>  # достать, копия остаётся</k><br>
      <n>git</n><c> </c><n>stash</n><c> </c><v>drop</v><c> </c><v>stash@{1}</v><k>   # выбросить</k><br><br>
      <b>apply</b><t>безопаснее: если при доставании конфликт, ящик не пропал</t>
      `,
      id: uuidv4(),
      tags: "stash pop apply list drop",
      link: "https://git-scm.com/docs/git-stash"
    },
    {
      title: `merge и его отмена`,
      text: `
      <b>Fast-forward:</b><t>в main ничего нового — стикер просто перематывается вперёд, без нового коммита</t><br>
      <b>Merge-коммит:</b><t>обе ветки ушли вперёд — новый коммит M с двумя родителями:</t><br>
      <c>main:    [B] → [футер] → [M]</c><br>
      <c>            ↘           ↗</c><br>
      <c>feature:    [кнопка]</c><br>
      <t>Родитель 1 — куда вливали (main), родитель 2 — что вливали</t><br><br>
      <b>Конфликт:</b><t>оба поменяли одну строку. Выбрать вариант между маркерами конфликта, потом git add и git commit</t><br><br>
      <b>Отменить, если НЕ отправлен:</b><br>
      <n>git</n><c> </c><n>reset</n><c> </c><f>--hard</f><c> </c><v>HEAD~1</v><br>
      <b>Отменить, если уже на сервере</b><t>(историю не переписываем):</t><br>
      <n>git</n><c> </c><n>revert</n><c> </c><f>-m</f><c> </c><v>1</v><c> </c><v>HEAD</v><k>  # новый коммит, убирающий влитое</k><br><br>
      <n>git</n><c> </c><n>log</n><c> </c><f>--oneline</f><c> </c><f>--first-parent</f><k>  # история без «пузырьков»</k>
      `,
      id: uuidv4(),
      tags: "merge fast-forward конфликт revert отменить merge first-parent",
      link: "https://git-scm.com/docs/git-revert"
    },
    {
      title: `rebase`,
      text: `
      <t>Переносит ваши коммиты, как будто вы начали после свежего main:</t><br>
      <c>main:    [B] → [D: футер]</c><br>
      <c>                     ↘</c><br>
      <c>feature:              [C': кнопка]</c><br><br>
      <n>git</n><c> </c><n>checkout</n><c> </c><v>feature</v><br>
      <n>git</n><c> </c><n>rebase</n><c> </c><v>main</v><br>
      <n>git</n><c> </c><n>checkout</n><c> </c><v>main</v><br>
      <n>git</n><c> </c><n>merge</n><c> </c><v>feature</v><k>  # fast-forward: просто перемотка, одна прямая линия</k><br><br>
      <b>C'</b><t>— новый коммит с новым хешем. Поэтому:</t><br>
      <b>можно</b><t>— своя ветка задачи</t><br>
      <b>нельзя</b><t>— общие ветки (dev, main), которые уже скачали другие</t><br><br>
      <n>git</n><c> </c><n>rebase</n><c> </c><f>--abort</f><k>  # передумал — всё как до rebase</k>
      `,
      id: uuidv4(),
      tags: "rebase fast-forward перенос коммитов abort",
      link: "https://git-scm.com/book/ru/v2/Ветвление-в-Git-Перебазирование"
    },
    {
      title: `rebase без боли`,
      text: `
      <b>Почему больно:</b><t>rebase переносит коммиты по одному. 3 коммита трогали одну строку → один и тот же конфликт 3 раза, на версиях, которых уже нет</t><br><br>
      <b>1. Склеить фичу в один коммит</b><t>(всё закоммичено!):</t><br>
      <n>git</n><c> </c><n>reset</n><c> </c><f>--soft</f><c> </c><v>$(git</v><c> </c><v>merge-base</v><c> </c><v>main</v><c> </c><v>HEAD)</v><br>
      <n>git</n><c> </c><n>commit</n><c> </c><f>-m</f><c> </c><v>"Кнопка: вся фича"</v><br>
      <n>git</n><c> </c><n>rebase</n><c> </c><v>main</v><k>  # один коммит → максимум один конфликт</k><br>
      <t>Код тот же, теряется только история промежуточных шагов. В GitLab — галочка «Squash commits»</t><br><br>
      <b>2. Запоминать решения конфликтов:</b><br>
      <n>git</n><c> </c><n>config</n><c> </c><f>--global</f><c> </c><v>rerere.enabled</v><c> </c><v>true</v><br><br>
      <b>3. Отправить переписанную ветку:</b><br>
      <n>git</n><c> </c><n>push</n><c> </c><f>--force-with-lease</f><br>
      <t>Перезапишет, только если на сервере никто ничего не добавил с вашего последнего pull.</t><c>--force</c><t>затрёт и чужое</t>
      `,
      id: uuidv4(),
      tags: "rebase squash rerere force-with-lease merge-base конфликты",
      link: "https://git-scm.com/docs/git-rerere"
    }
  ],
  "React hooks": [
    {
      title: `useEffectEvent · React 19.2`,
      text: `
      <b>React 19.2+</b><t>— лечит stale closure и лишние перезапуски эффекта</t><br><br>
      <t>Задача: переподключаться к чату при смене roomId, но</t><b>не</b><t>при смене theme</t><br><br>
      <f>const</f><c> </c><n>onConnected</n><c> = </c><n>useEffectEvent</n><c>(() => {</c><br>
      <c>  </c><n>showNotification</n><c>(</c><v>'Подключено'</v><c>, </c><n>theme</n><c>);</c><k>  // всегда свежая theme</k><br>
      <c>});</c><br><br>
      <n>useEffect</n><c>(() => {</c><br>
      <c>  </c><f>const</f><c> </c><n>conn</n><c> = </c><n>createConnection</n><c>(</c><n>roomId</n><c>);</c><br>
      <c>  </c><n>conn</n><c>.</c><n>on</n><c>(</c><v>'connected'</v><c>, () => </c><n>onConnected</n><c>());</c><br>
      <c>  </c><n>conn</n><c>.</c><n>connect</n><c>();</c><br>
      <c>  </c><y>return</y><c> () => </c><n>conn</n><c>.</c><n>disconnect</n><c>();</c><br>
      <c>}, [roomId]);</c><k>  // theme в зависимостях не нужна</k><br><br>
      <b>Правила:</b><t>вызывать только из эффектов, не передавать в другие компоненты, не класть в зависимости</t>
      `,
      id: uuidv4(),
      tags: "useEffectEvent 19.2 stale closure зависимости",
      link: "https://react.dev/reference/react/useEffectEvent"
    },
    {
      title: `use · React 19`,
      text: `
      <b>React 19+</b><t>— читает промис или контекст прямо в рендере</t><br><br>
      <f>function</f><c> </c><n>Comments</n><c>({ </c><n>commentsPromise</n><c> }) {</c><br>
      <c>  </c><f>const</f><c> </c><n>comments</n><c> = </c><n>use</n><c>(</c><n>commentsPromise</n><c>);</c><k>  // ждёт через Suspense</k><br>
      <c>  </c><y>return</y><c> </c><n>comments</n><c>.</c><n>map</n><c>(</c><n>renderComment</n><c>);</c><br>
      <c>}</c><br><br>
      <f>if</f><c> (</c><n>show</n><c>) {</c><br>
      <c>  </c><f>const</f><c> </c><n>theme</n><c> = </c><n>use</n><c>(</c><n>ThemeContext</n><c>);</c><k>  // можно внутри if — в отличие от useContext</k><br>
      <c>}</c><br><br>
      <b>Важно:</b><t>промис создают</t><b>вне рендера</b><t>(в серверном компоненте, кэше или родителе). Новый промис на каждый рендер = бесконечная загрузка. В try/catch use не вызывают — ошибки ловит Error Boundary</t>
      `,
      id: uuidv4(),
      tags: "use 19 suspense промис контекст",
      link: "https://react.dev/reference/react/use"
    },
    {
      title: `useActionState · React 19`,
      text: `
      <b>React 19+</b><t>— состояние формы + отправка + флаг загрузки в одном хуке</t><br><br>
      <f>async</f><c> </c><f>function</f><c> </c><n>addToCart</n><c>(</c><n>prevState</n><c>, </c><n>formData</n><c>) {</c><br>
      <c>  </c><f>const</f><c> </c><n>res</n><c> = </c><f>await</f><c> </c><n>api</n><c>.</c><n>add</n><c>(</c><n>formData</n><c>.</c><n>get</n><c>(</c><v>'id'</v><c>));</c><br>
      <c>  </c><y>return</y><c> </c><n>res</n><c>.</c><n>ok</n><c> ? </c><v>'Добавлено'</v><c> : </c><v>'Ошибка'</v><c>;</c><br>
      <c>}</c><br><br>
      <c>const [message, formAction, isPending] =</c><br>
      <c>  </c><n>useActionState</n><c>(</c><n>addToCart</n><c>, </c><f>null</f><c>);</c><br><br>
      <c><form action={formAction}></c><br><br>
      <t>Функция получает</t><b>предыдущее состояние</b><t>и formData, её результат становится новым state.</t><br>
      <t>В ранних canary назывался</t><n>ReactDOM</n><c>.</c><n>useFormState</n>
      `,
      id: uuidv4(),
      tags: "useActionState 19 форма action",
      link: "https://react.dev/reference/react/useActionState"
    },
    {
      title: `useOptimistic · React 19`,
      text: `
      <b>React 19+</b><t>— показать результат сразу, не дожидаясь сервера</t><br><br>
      <c>const [optimisticLikes, addLike] = useOptimistic(</c><br>
      <c>  </c><n>likes</n><c>,</c><br>
      <c>  (</c><n>current</n><c>, </c><n>delta</n><c>) => </c><n>current</n><c> + </c><n>delta</n><br>
      <c>);</c><br><br>
      <f>async</f><c> </c><f>function</f><c> </c><n>like</n><c>() {</c><br>
      <c>  </c><n>addLike</n><c>(</c><v>1</v><c>);</c><k>        // UI обновился мгновенно</k><br>
      <c>  </c><f>await</f><c> </c><n>api</n><c>.</c><n>like</n><c>();</c><k>  // пока ждём — показываем оптимистичное</k><br>
      <c>}</c><br><br>
      <t>Вызывать внутри Action или startTransition. Когда действие закончилось, значение возвращается к настоящему</t><n>likes</n><t>— при ошибке «откат» происходит сам</t>
      `,
      id: uuidv4(),
      tags: "useOptimistic 19 оптимистичный ui",
      link: "https://react.dev/reference/react/useOptimistic"
    },
    {
      title: `useFormStatus · React 19`,
      text: `
      <b>React 19+, импорт из react-dom</b><br><br>
      <f>import</f><c> { </c><n>useFormStatus</n><c> } </c><f>from</f><c> </c><v>'react-dom'</v><c>;</c><br><br>
      <f>function</f><c> </c><n>SubmitButton</n><c>() {</c><br>
      <c>  </c><f>const</f><c> { </c><n>pending</n><c>, </c><n>data</n><c>, </c><n>method</n><c> } = </c><n>useFormStatus</n><c>();</c><br>
      <c>  </c><y>return</y><c> (</c><br>
      <c>    <button disabled={pending}>Отправить</button></c><br>
      <c>  );</c><br>
      <c>}</c><br><br>
      <b>Подвох:</b><t>хук видит только</t><b>родительскую</b><t>form. Если вызвать его в том же компоненте, где рендерится form, pending всегда будет false. Поэтому кнопку выносят в отдельный компонент</t>
      `,
      id: uuidv4(),
      tags: "useFormStatus 19 react-dom pending",
      link: "https://react.dev/reference/react-dom/hooks/useFormStatus"
    },
    {
      title: `useTransition · React 18 / 19`,
      text: `
      <b>React 18+</b><t>— пометить обновление как несрочное</t><br><br>
      <c>const [isPending, startTransition] = useTransition();</c><br><br>
      <f>function</f><c> </c><n>selectTab</n><c>(</c><n>tab</n><c>) {</c><br>
      <c>  </c><n>startTransition</n><c>(() => {</c><br>
      <c>    </c><n>setTab</n><c>(</c><n>tab</n><c>);</c><k>  // тяжёлый рендер можно прервать вводом</k><br>
      <c>  });</c><br>
      <c>}</c><br><br>
      <t>Это не debounce: задержки нет, есть</t><b>приоритет.</b><t>Пока рендер идёт, на экране старый UI, isPending = true</t><br><br>
      <b>React 19+:</b><t>в startTransition можно передать</t><b>async-функцию</b><t>(Action) — isPending держится до конца await</t>
      `,
      id: uuidv4(),
      tags: "useTransition startTransition 18 19 приоритет",
      link: "https://react.dev/reference/react/useTransition"
    },
    {
      title: `useDeferredValue · React 18 / 19`,
      text: `
      <b>React 18+</b><t>— «отстающая» копия значения</t><br><br>
      <c>const [query, setQuery] = useState('');</c><br>
      <f>const</f><c> </c><n>deferredQuery</n><c> = </c><n>useDeferredValue</n><c>(</c><n>query</n><c>);</c><br><br>
      <c><input value={query} onChange={...} /></c><k>  // мгновенно</k><br>
      <c><SearchResults query={deferredQuery} /></c><k>  // догоняет в фоне</k><br><br>
      <t>Ввод не тормозит: сначала рендер со старым deferredQuery, затем фоновый с новым, прерываемый следующим символом</t><br><br>
      <b>React 19+:</b><t>второй аргумент</t><n>useDeferredValue</n><c>(</c><n>query</n><c>, </c><v>''</v><c>)</c><t>— начальное значение для первого рендера</t><br><br>
      <t>Когда использовать: нет доступа к setState (значение пришло пропсом) — иначе useTransition</t>
      `,
      id: uuidv4(),
      tags: "useDeferredValue 18 19 поиск ввод",
      link: "https://react.dev/reference/react/useDeferredValue"
    },
    {
      title: `useSyncExternalStore · React 18`,
      text: `
      <b>React 18+</b><t>— подписка на внешний стор без tearing</t><br><br>
      <f>const</f><c> </c><n>isOnline</n><c> = </c><n>useSyncExternalStore</n><c>(</c><br>
      <c>  </c><n>subscribe</n><c>,</c><k>                   // (callback) => unsubscribe</k><br>
      <c>  () => </c><n>navigator</n><c>.</c><n>onLine</n><c>,</c><k>      // снимок на клиенте</k><br>
      <c>  () => </c><f>true</f><k>                   // снимок при SSR</k><br>
      <c>);</c><br><br>
      <b>Tearing:</b><t>конкурентный рендер прерывается, стор меняется в паузе — и одни компоненты видят старое значение, другие новое. Хук гарантирует один снимок</t><br><br>
      <b>Подвох:</b><t>getSnapshot должен возвращать</t><b>тот же объект,</b><t>если данные не менялись. Новый объект на каждый вызов → бесконечный ре-рендер</t>
      `,
      id: uuidv4(),
      tags: "useSyncExternalStore 18 tearing redux zustand",
      link: "https://react.dev/reference/react/useSyncExternalStore"
    },
    {
      title: `useId · React 18`,
      text: `
      <b>React 18+</b><t>— уникальный id, одинаковый на сервере и клиенте</t><br><br>
      <f>function</f><c> </c><n>Field</n><c>({ </c><n>label</n><c> }) {</c><br>
      <c>  </c><f>const</f><c> </c><n>id</n><c> = </c><n>useId</n><c>();</c><br>
      <c>  </c><y>return</y><c> (</c><br>
      <c>    <></c><br>
      <c>      <label htmlFor={id}>{label}</label></c><br>
      <c>      <input id={id} aria-describedby={id + '-hint'} /></c><br>
      <c>    </></c><br>
      <c>  );</c><br>
      <c>}</c><br><br>
      <t>Счётчик</t><n>id</n><c>++</c><t>или Math.random() ломаются при SSR: id на сервере и клиенте не совпадут</t><br><br>
      <b>Не для key в списках</b><t>— key берут из данных</t>
      `,
      id: uuidv4(),
      tags: "useId 18 ssr accessibility label",
      link: "https://react.dev/reference/react/useId"
    },
    {
      title: `useInsertionEffect · React 18`,
      text: `
      <b>React 18+</b><t>— только для авторов CSS-in-JS библиотек</t><br><br>
      <n>useInsertionEffect</n><c>(() => {</c><br>
      <c>  </c><n>injectStyle</n><c>(</c><n>rule</n><c>);</c><k>  // вставить style до замеров layout</k><br>
      <c>});</c><br><br>
      <b>Порядок эффектов:</b><br>
      <c>useInsertionEffect → useLayoutEffect → отрисовка → useEffect</c><br><br>
      <t>Стили успевают попасть в DOM до того, как useLayoutEffect начнёт мерить элементы</t><br><br>
      <t>Внутри нет доступа к refs и нельзя вызывать setState. В обычном коде — useEffect или useLayoutEffect</t>
      `,
      id: uuidv4(),
      tags: "useInsertionEffect 18 css-in-js порядок эффектов",
      link: "https://react.dev/reference/react/useInsertionEffect"
    },
    {
      title: `Хуки и React 18: батчинг и StrictMode`,
      text: `
      <b>React 18+, createRoot</b><br><br>
      <b>Автоматический батчинг:</b><t>несколько setState — один рендер везде, даже в setTimeout и промисах (раньше только в React-обработчиках)</t><br>
      <n>setTimeout</n><c>(() => {</c><br>
      <c>  </c><n>setCount</n><c>(</c><n>c</n><c> => </c><n>c</n><c> + </c><v>1</v><c>);</c><br>
      <c>  </c><n>setFlag</n><c>(</c><n>f</n><c> => !</c><n>f</n><c>);</c><k>  // один рендер</k><br>
      <c>});</c><br>
      <t>Нужен немедленный рендер —</t><n>flushSync</n><c>(() => </c><n>setCount</n><c>(</c><v>1</v><c>))</c><br><br>
      <b>StrictMode в dev:</b><t>эффект запускается так —</t><br>
      <c>setup → cleanup → setup</c><br>
      <t>Это проверка, что cleanup написан правильно. В продакшене один запуск</t>
      `,
      id: uuidv4(),
      tags: "18 батчинг flushSync strictmode эффект дважды",
      link: "https://react.dev/blog/2022/03/29/react-v18"
    }
  ],
  "React Mobx": [
    {
      title: `Как удалить директорию локально и из удаленного репо?`,
      text: `<code>git rm -r one-of-the-directories</code><br>
      <code>git commit -m "Remove duplicated directory"</code><br>
      <code>git push origin <your-git-branch></code>  typically  <b>'master'</b>, but not always`,
      id: uuidv4(),
      tags: "",
      link:
        "https://stackoverflow.com/questions/6313126/how-to-remove-a-directory-from-git-repository"
    }
  ],
  Lodash: [
    {
      title: `Метод each`,
      text: `
      <b>Работа с массивами</b><br><br>
      <c>_.each([1,2], function(elem,idx){</c><br>
      <c>   console.log(</c>elem<c>) </c><k> // 1, 2</k><br>
      <c>   console.log(idx) </c><k> // 0, 1</k><br>
      <c>})</c><br>
      <t>Возвращает переданный</t><b> массив</b>
      <br><br>
      <b>Работа с объектами</b><br><br>
      <c>_.each({a: 1, b: 'string'}, function(elem,key){</c><br>
        <c>   console.log(elem) </c><k> // 1, 'string'</k><br>
        <c>   console.log(key) </c><k> // 'a', 'b'</k><br>
      <c>})</c><br>
      <t>Возвращает переданный</t><b> объект</b>
      `,
      id: uuidv4(),
      tags: "",
      link: "https://lodash.com/docs#forEach"
    },
    {
      title: `Debounce`,
      text: `
      <t>Создание задержки перед выполнением функции методом <b>Debounce<br>
      <t>Функция выполняется <b>после срабатывания<t>того события, после наступления которого прошло<b>заданное время<br>
      <c>
      <f>import <c>{ </c><n>debounce<c> } from "lodash";

      </c><f>class <n>searchField <f>extends <n>React.Component</c> {
        </c><n>state</c> = { </c><v>value<c>: '' }

        </c><n>debounceEvent<c>( </c><v>...args <c>) {    </c><k> // Создаем доп. метод для</k> преобразования и захвата <b>event</b><k> по замыканию</k><c>
          </c><f>const <n>debouncedEvent<c> = </c><n>debounce<c>( </c><v>...args<c>);    </c><k> // Создаем</k><b>замыкание</b><k>из</k><b>debounce</b><k>для</k><b>fn</b><k>и</k><b>event</b></k><c>
          </c><y>return <n>e<c> => {
            </c><n>e.persist()<c>;    </c><k> // Преобразуем </k><b>syntetic event  <k> (событие не сотрется сборщиком мусора)</k><c>
            return debouncedEvent(e);    </c><k> // Запускаем созданное</k><b>debounce замыкание</b><c>
          };
        }
      
        handleSearchInput = ({ target }) => {    </c><k> // Метод-обработчик создаем стандартным образом</k><c>
          this.setState(value: target.value);
        };
        
        render() {
          return <input onInput={this.debounceEvent(this.handleSearchInput, 300)}/> 
                                      </c><k> // </k><b>debounce</b><k> принимает</k><b>функцию</b><k>и</k><b>время задержки</b><c>
        }
      }
      </c><br>
      `,
      id: uuidv4(),
      tags: "",
      link: "https://www.youtube.com/watch?v=KXao_qwl05k"
    },
    {
      title: `Throttle`,
      text: `
      <t>Создание задержки перед выполнением функции методом </t><b>Throttle</b><br>
      <t>Функция выполняется через </t><b>равные интервалы</b><t>  времени, в течении </t><b>постоянного срабатывания</b><t> события</t><br>
      <c>
      import { throttle } from "lodash";

      class searchField extends React.Component {
        state = { value: '' }

        throttleEvent(...args) {    </c><k> // Создаем доп. метод для</k> преобразования и захвата <b>event</b><k> по замыканию</k><c>
          const throttledEvent = throttle(...args);    </c><k> // Создаем</k><b>замыкание</b><k>из</k><b>throttle</b><k>для</k><b>fn</b><k>и</k><b>event</b></k><c>
          return e => {
            e.persist();    </c><k> // Преобразуем </k><b>syntetic event  <k> (событие не сотрется сборщиком мусора)</k><c>
            return throttledEvent(e);    </c><k> // Запускаем созданное</k><b>throttle замыкание</b><c>
          };
        }
      
        handleSearchInput = ({ target }) => {    </c><k> // Метод-обработчик создаем стандартным образом</k><c>
          this.setState(value: target.value);
        };
        
        render() {
          return <input onInput={this.throttleEvent(this.handleSearchInput, 300)}/> 
                                      </c><k> // </k><b>throttle</b><k> принимает</k><b>функцию</b><k>и</k><b>время задержки</b><c>
        }
      }
      </c><br>
      `,
      id: uuidv4(),
      tags: "",
      link: "https://www.youtube.com/watch?v=KXao_qwl05k"
    },
    {
      title: `Метод zip`,
      text: `
      <b>Работа с массивами</b><br><br>
      <c>let arr = _.zip(['a', 'b'], [1, 2], [true, false]);</c><br>
      <c>   console.log(arr) </c><k>// [['a', 1, true], ['b', 2, false]]</k><br>
      <c>})</c><br>
      <t>Возвращает собранный</t><b> массив</b>
      `,
      id: uuidv4(),
      tags: "",
      link: "https://lodash.com/docs/4.17.11#zip"
    },
    {
      title: `Метод omit / pick`,
      text: `
      <b>Работа с объектами<br><br>
      <t>Копирует свойства <b>кроме указанных / <b>только указанные <t> переданного объекта соответственно
      <br>
      <br>
      <c>let </c><n>object<c> = { </c><n>'a': <v>1, <n>'b': <v>'2', <n>'c': <v>3<c> };</c><br>
      <n>_.omit<c> ( </c><n>object, <c> [ </c><v>'a', 'c'<c> ] );      </c><k>// => { 'b': 2 }<br>
      <n>_.pick<c> ( </c><n>object, <c>[</c><v>'a', 'c'<c> ] );      </c><k>// => { 'a': 1, 'c': 3 }
      <br>
      <br>
      <t>Возвращает новый</t><b> объект</b>
      `,
      id: uuidv4(),
      tags: "",
      link: "https://lodash.com/docs/4.17.11#zip"
    },
    {
      title: `import {noop, omit} from 'lodash'`,
      text: "",
      id: uuidv4(),
      tags: "",
      link: ""
    }
  ],
  Javascript: [
    {
      title: `Observer + Observable`,
      text: `<c>
      'use strict';

      const randomChar = () => String
        .fromCharCode(Math.floor((Math.random() * 25) + 97));
      
      const subscribe = observer => {
        const observable = { observer };
        setInterval(() => {
          const char = randomChar();
          observer(char);
        }, 200);
        return observable;
      };
      
      // Usage
      
      let count = 0;
      
      const observer = char => {
        process.stdout.write(char);
        count++;
        if (count > 50) {
          process.stdout.write('\n');
          process.exit(0);
        }
      };
      
      const observable = subscribe(observer);
      
      console.dir({ observer, observable });
      </c>`,
      id: uuidv4(),
      tags: "",
      link: "https://www.youtube.com/watch?v=_bFXuLcXoXg"
    }
  ],
  "TypeScript": [
    {
      title: `Дистрибутивные условные типы`,
      text: `
      <f>type</f><c> </c><n>ToArray</n><c><</c><n>T</n><c>> = </c><n>T</n><c> </c><f>extends</f><c> </c><f>any</f><c> ? </c><n>T</n><c>[] : </c><f>never</f><c>;</c><br>
      <f>type</f><c> </c><n>R</n><c> = </c><n>ToArray</n><c><</c><f>string</f><c> | </c><f>number</f><c>>;</c><br><br>
      <b>Ответ:</b><c>string[] | number[]</c><br><br>
      <t>Условный тип на «голом» параметре применяется к каждому члену объединения отдельно. Чтобы получить</t><c>(string | number)[]</c><t>, дистрибутивность отключают скобками:</t><c>[T] extends [any] ? T[] : never</c>
      `,
      id: uuidv4(),
      tags: "typescript conditional distributive union",
      link: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html"
    },
    {
      title: `never в условном типе`,
      text: `
      <f>type</f><c> </c><n>IsString</n><c><</c><n>T</n><c>> = </c><n>T</n><c> </c><f>extends</f><c> </c><f>string</f><c> ? </c><v>'yes'</v><c> : </c><v>'no'</v><c>;</c><br>
      <f>type</f><c> </c><n>X</n><c> = </c><n>IsString</n><c><</c><f>never</f><c>>;</c><br><br>
      <b>Ответ:</b><c>never</c><br><br>
      <b>never — пустое объединение.</b><t>Дистрибутивный тип применяется к каждому члену, а их нет, поэтому и результат пустой. Проверка «это never?» пишется так:</t><c>[T] extends [never]</c>
      `,
      id: uuidv4(),
      tags: "typescript never conditional",
      link: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html"
    },
    {
      title: `satisfies против аннотации`,
      text: `
      <f>const</f><c> </c><n>a</n><c>: </c><n>Record</n><c><</c><f>string</f><c>, </c><f>string</f><c>> = { </c><n>x</n><c>: </c><v>'a'</v><c> };</c><br>
      <f>const</f><c> </c><n>b</n><c> = { </c><n>x</n><c>: </c><v>'a'</v><c> } </c><f>satisfies</f><c> </c><n>Record</n><c><</c><f>string</f><c>, </c><f>string</f><c>>;</c><br><br>
      <b>Ответ:</b><t>satisfies проверяет соответствие, но</t><b>сохраняет точный выведенный тип</b><br><br>
      <t>Аннотация расширяет тип: у</t><c>a.y</c><t>тип string, хотя поля нет. У</t><c>b</c><t>тип</t><c>{ x: string }</c><t>, и</t><c>b.y</c><t>— ошибка компиляции. Всё только на этапе проверки типов, в рантайме ничего нет</t>
      `,
      id: uuidv4(),
      tags: "typescript satisfies annotation",
      link: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html"
    },
    {
      title: `Сужение через флаг и замыкание`,
      text: `
      <f>function</f><c> </c><n>f</n><c>(</c><n>x</n><c>: </c><f>string</f><c> | </c><f>number</f><c>) {</c><br>
      <c>  </c><f>const</f><c> </c><n>isStr</n><c> = </c><f>typeof</f><c> </c><n>x</n><c> === </c><v>'string'</v><c>;</c><br>
      <c>  </c><n>setTimeout</n><c>(() => {</c><br>
      <c>    </c><f>if</f><c> (</c><n>isStr</n><c>) </c><n>x</n><c>.</c><n>toUpperCase</n><c>(); </c><k>// ошибка, если x переприсваивается</k><br>
      <c>  });</c><br>
      <c>}</c><br><br>
      <b>Ответ:</b><t>сужение через сохранённое условие работает, только если</t><b>x не переприсваивается</b><br><br>
      <t>Колбэк выполнится позже, в другой макрозадаче. К этому моменту x могла стать числом, а флаг остался старым. Та же щель «проверил → использовал», что и в гонках</t>
      `,
      id: uuidv4(),
      tags: "typescript narrowing aliased condition closure",
      link: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html"
    },
    {
      title: `infer: параметры функции`,
      text: `
      <f>type</f><c> </c><n>Params</n><c><</c><n>F</n><c>> = </c><n>F</n><c> </c><f>extends</f><c> (...</c><n>args</n><c>: </c><f>infer</f><c> </c><n>A</n><c>) => </c><f>any</f><c> ? </c><n>A</n><c> : </c><f>never</f><c>;</c><br>
      <f>type</f><c> </c><n>P</n><c> = </c><n>Params</n><c><(</c><n>id</n><c>: </c><f>number</f><c>, </c><n>name</n><c>?: </c><f>string</f><c>) => </c><f>void</f><c>>;</c><br><br>
      <b>Ответ:</b><c>[id: number, name?: string]</c><br><br>
      <t>infer захватывает список аргументов целиком как кортеж — с именами и необязательностью. Так устроен встроенный</t><c>Parameters<F></c>
      `,
      id: uuidv4(),
      tags: "typescript infer parameters tuple",
      link: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html"
    },
    {
      title: `as const`,
      text: `
      <f>const</f><c> </c><n>config</n><c> = { </c><n>status</n><c>: </c><v>'ok'</v><c>, </c><n>retries</n><c>: </c><v>3</v><c> } </c><f>as</f><c> </c><f>const</f><c>;</c><br>
      <f>type</f><c> </c><n>S</n><c> = </c><f>typeof</f><c> </c><n>config</n><c>.</c><n>status</n><c>;</c><br><br>
      <b>Ответ:</b><c>'ok'</c><br><br>
      <t>Без as const поле расширилось бы до string: его можно поменять. as const делает поля readonly и сохраняет литералы: status — именно 'ok', retries — именно 3</t>
      `,
      id: uuidv4(),
      tags: "typescript as const literal readonly",
      link: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html"
    },
    {
      title: `Проверка полноты через never`,
      text: `
      <f>type</f><c> </c><n>Shape</n><c> = { </c><n>kind</n><c>: </c><v>'circle'</v><c>; </c><n>r</n><c>: </c><f>number</f><c> } | { </c><n>kind</n><c>: </c><v>'square'</v><c>; </c><n>a</n><c>: </c><f>number</f><c> };</c><br>
      <f>function</f><c> </c><n>area</n><c>(</c><n>s</n><c>: </c><n>Shape</n><c>) {</c><br>
      <c>  </c><f>switch</f><c> (</c><n>s</n><c>.</c><n>kind</n><c>) {</c><br>
      <c>    </c><f>case</f><c> </c><v>'circle'</v><c>: </c><y>return</y><c> </c><n>Math</n><c>.</c><n>PI</n><c> * </c><n>s</n><c>.</c><n>r</n><c> ** </c><v>2</v><c>;</c><br>
      <c>    </c><f>case</f><c> </c><v>'square'</v><c>: </c><y>return</y><c> </c><n>s</n><c>.</c><n>a</n><c> ** </c><v>2</v><c>;</c><br>
      <c>    </c><f>default</f><c>: </c><f>const</f><c> </c><n>_x</n><c>: </c><f>never</f><c> = </c><n>s</n><c>; </c><y>return</y><c> </c><n>_x</n><c>;</c><br>
      <c>  }</c><br>
      <c>}</c><br><br>
      <b>Ответ:</b><t>добавили</t><c>{ kind: 'triangle' }</c><t>и не обработали →</t><b>ошибка компиляции</b><br><br>
      <t>Пока все варианты разобраны, в default тип s сужен до never. Новый вариант попадёт в default, и присвоить его в never нельзя. Компилятор сам напомнит про забытый случай</t>
      `,
      id: uuidv4(),
      tags: "typescript exhaustiveness never switch discriminated union",
      link: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking"
    },
    {
      title: `Ковариантность массивов`,
      text: `
      <f>const</f><c> </c><n>dogs</n><c>: </c><n>Dog</n><c>[] = [];</c><br>
      <f>const</f><c> </c><n>animals</n><c>: </c><n>Animal</n><c>[] = </c><n>dogs</n><c>;</c><br>
      <n>animals</n><c>.</c><n>push</n><c>(</c><f>new</f><c> </c><n>Cat</n><c>());</c><br>
      <n>dogs</n><c>[</c><v>0</v><c>].</c><n>bark</n><c>(); </c><k>// 💥</k><br><br>
      <b>Ответ:</b><t>массивы в TS</t><b>ковариантны намеренно</b><t>, ради удобства</t><br><br>
      <t>Читать Dog как Animal безопасно, записывать — нет: туда можно положить Cat. Строго массивы должны быть инвариантными — это известная дыра в системе типов. Защита — принимать</t><c>readonly Animal[]</c><t>, тогда push невозможен</t>
      `,
      id: uuidv4(),
      tags: "typescript variance covariance array readonly",
      link: "https://www.typescriptlang.org/docs/handbook/type-compatibility.html"
    }
  ],
  Webpack: [
    {
      title: `Module Federation: Invalid hook call`,
      text: `
      <b>Симптом:</b><t>в удалённом модуле микрофронтенда падает «Invalid hook call»</t><br><br>
      <b>Причина:</b><t>на странице</t><b>две копии React</b><t>— хоста и удалённого модуля</t><br><br>
      <c>хост:    React #1  ← рендерит дерево</c><br>
      <c>remote:  React #2  ← useState спрашивает его</c><br>
      <c>         «кто сейчас рендерится?» → никто → ошибка</c><br><br>
      <t>Хуки работают через внутреннее состояние</t><b>конкретного экземпляра</b><t>React: какой компонент сейчас рендерится. Чужой экземпляр об этом ничего не знает</t><br><br>
      <b>Лечение</b><t>— одна копия на всех, в конфиге и хоста, и remote:</t><br>
      <c>shared: {</c><br>
      <c>  react: { singleton: true },</c><br>
      <c>  'react-dom': { singleton: true }</c><br>
      <c>}</c><br><br>
      <t>Та же идея, что runtimeChunk: 'single' — один рантайм и одни экземпляры модулей на страницу</t>
      `,
      id: uuidv4(),
      tags: "webpack module federation microfrontend shared singleton react invalid hook call",
      link: "https://webpack.js.org/plugins/module-federation-plugin/#singleton"
    },
    {
      title: `HMR: почему полная перезагрузка`,
      text: `
      <c>export const PAGE_SIZE = 20;</c><br>
      <c>export default function Table() { /* ... */ }</c><br><br>
      <b>Правка этого файла</b><t>→ полная перезагрузка страницы, а соседние компоненты обновляются на лету</t><br><br>
      <b>Причина:</b><t>React Refresh считает модуль</t><b>границей обновления</b><t>, только если он экспортирует</t><b>одни компоненты</b><br><br>
      <t>Компонент Refresh умеет подменить, сохранив состояние. Константа — произвольное значение: те, кто её импортировал, держат старую. Модуль не граница, и обновление всплывает вверх по импортёрам:</t><br>
      <c>Table.jsx  ✗ не граница</c><br>
      <c>   ↑ кто импортирует?</c><br>
      <c>Page.jsx   ✗ …</c><br>
      <c>   ↑</c><br>
      <c>index.js   никто не принял → reload</c><br><br>
      <b>Лечение:</b><t>константы в отдельный файл, в файле компонента — только компоненты</t>
      `,
      id: uuidv4(),
      tags: "webpack hmr react refresh fast refresh reload граница обновления",
      link: "https://github.com/pmmmwh/react-refresh-webpack-plugin"
    },
    {
      title: `Загрузчики: pitch-фаза`,
      text: `
      <c>use: ['a-loader', 'b-loader', 'c-loader']</c><br><br>
      <b>Цепочка проходится дважды:</b><br>
      <c>pitch:    a → b → c</c><k>     # слева направо</k><br>
      <c>файл:     читается с диска</c><br>
      <c>обычная:  c → b → a</c><k>     # справа налево</k><br><br>
      <b>Если pitch b что-то вернул</b><t>— c и чтение файла пропускаются, результат сразу идёт в обычную фазу a:</t><br>
      <c>pitch:    a → b ✋ вернул результат</c><br>
      <c>обычная:  a</c><br><br>
      <b>Так работает style-loader:</b><t>его pitch возвращает код «импортируй результат css-loader и вставь в тег style», а не получает CSS строкой из цепочки</t>
      `,
      id: uuidv4(),
      tags: "webpack loader pitch style-loader css-loader порядок загрузчиков",
      link: "https://webpack.js.org/api/loaders/#pitching-loader"
    }
  ],
  "Event loop": [
    {
      title: `Один цикл event loop`,
      text: `
      <b>1.</b><t>Взять</t><b>одну</b><t>макрозадачу (setTimeout, клик, ответ сети) и выполнить</t><br>
      <b>2.</b><t>Выполнить</t><b>все</b><t>микрозадачи, пока очередь не опустеет. Новые, добавленные по ходу, тоже сейчас</t><br>
      <b>3.</b><t>Если пора — отрисовать кадр: requestAnimationFrame → стили → layout → paint</t><br>
      <b>4.</b><t>Следующая макрозадача</t><br><br>
      <b>«Если пора»:</b><t>экран 60 Гц обновляется раз в ~16,7 мс. За это время может пройти много макрозадач, а кадр будет один</t><br><br>
      <c>|---- 16 мс ----|---- 16 мс ----|</c><br>
      <c> [з][з][з]  🎨    [з][з]   🎨</c><br><br>
      <t>Отрисовка чередуется с</t><b>макрозадачами,</b><t>а не с микрозадачами</t>
      `,
      id: uuidv4(),
      tags: "event loop отрисовка кадр макрозадача микрозадача",
      link: "https://javascript.info/event-loop"
    },
    {
      title: `Микро- и макрозадачи`,
      text: `
      <b>Макрозадачи</b><t>(по одной за круг):</t><br>
      <n>setTimeout</n><c>, </c><n>setInterval</n><c>, </c><n>MessageChannel</n><br>
      <t>клик, ввод, ответ сети, сообщение WebSocket</t><br><br>
      <b>Микрозадачи</b><t>(все сразу, до отрисовки):</t><br>
      <n>promise</n><c>.</c><n>then</n><c> / </c><f>catch</f><c> / </c><n>finally</n><br>
      <c>код после </c><f>await</f><br>
      <n>queueMicrotask</n><c>(</c><n>fn</n><c>)</c><br><br>
      <t>Тело async-функции</t><b>до первого await</b><t>выполняется синхронно</t>
      `,
      id: uuidv4(),
      tags: "микрозадача макрозадача promise setTimeout await",
      link: "https://javascript.info/microtask-queue"
    },
    {
      title: `Порядок вывода: классика`,
      text: `
      <n>console</n><c>.</c><n>log</n><c>(</c><v>1</v><c>);</c><br>
      <n>setTimeout</n><c>(() => </c><n>console</n><c>.</c><n>log</n><c>(</c><v>2</v><c>));</c><br>
      <n>Promise</n><c>.</c><n>resolve</n><c>().</c><n>then</n><c>(() => </c><n>console</n><c>.</c><n>log</n><c>(</c><v>3</v><c>));</c><br>
      <n>queueMicrotask</n><c>(() => </c><n>console</n><c>.</c><n>log</n><c>(</c><v>4</v><c>));</c><br>
      <c>(</c><f>async</f><c> () => {</c><br>
      <c>  </c><n>console</n><c>.</c><n>log</n><c>(</c><v>5</v><c>);</c><br>
      <c>  </c><f>await</f><c> </c><f>null</f><c>;</c><br>
      <c>  </c><n>console</n><c>.</c><n>log</n><c>(</c><v>6</v><c>);</c><br>
      <c>})();</c><br>
      <n>console</n><c>.</c><n>log</n><c>(</c><v>7</v><c>);</c><br><br>
      <b>1 5 7 3 4 6 2</b><br><br>
      <t>Синхронно: 1, 5 (тело async до await), 7</t><br>
      <t>Микрозадачи по порядку постановки: 3, 4, 6</t><br>
      <t>Макрозадача setTimeout: 2</t>
      `,
      id: uuidv4(),
      tags: "порядок вывода собеседование",
      link: "https://javascript.info/microtask-queue"
    },
    {
      title: `then всегда асинхронный`,
      text: `
      <n>console</n><c>.</c><n>log</n><c>(</c><v>'старт'</v><c>);</c><br>
      <f>let</f><c> </c><n>p</n><c> = </c><n>Promise</n><c>.</c><n>resolve</n><c>();</c><br>
      <f>for</f><c> (</c><f>let</f><c> </c><n>i</n><c> = </c><v>0</v><c>; </c><n>i</n><c> < </c><v>3</v><c>; </c><n>i</n><c>++) {</c><br>
      <c>  </c><n>console</n><c>.</c><n>log</n><c>(</c><v>'цикл'</v><c>, </c><n>i</n><c>);</c><br>
      <c>  </c><n>p</n><c> = </c><n>p</n><c>.</c><n>then</n><c>(() => </c><n>console</n><c>.</c><n>log</n><c>(</c><v>'then'</v><c>, </c><n>i</n><c>));</c><br>
      <c>}</c><br>
      <n>console</n><c>.</c><n>log</n><c>(</c><v>'конец'</v><c>);</c><br><br>
      <k>// старт, цикл 0, цикл 1, цикл 2, конец, then 0, then 1, then 2</k><br><br>
      <t>Колбэк then</t><b>никогда</b><t>не вызывается синхронно, даже если промис уже готов.</t><br>
      <t>Сначала весь синхронный код (весь цикл), потом очередь микрозадач.</t><br><br>
      <t>Зачем: иначе код был бы то синхронным, то асинхронным (баги «Zalgo»)</t>
      `,
      id: uuidv4(),
      tags: "then асинхронный zalgo",
      link: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide"
    },
    {
      title: `500 then и setTimeout`,
      text: `
      <f>let</f><c> </c><n>p</n><c> = </c><n>Promise</n><c>.</c><n>resolve</n><c>();</c><br>
      <f>for</f><c> (</c><f>let</f><c> </c><n>i</n><c> = </c><v>0</v><c>; </c><n>i</n><c> < </c><v>500</v><c>; </c><n>i</n><c>++) {</c><br>
      <c>  </c><n>p</n><c> = </c><n>p</n><c>.</c><n>then</n><c>(() => </c><n>console</n><c>.</c><n>log</n><c>(</c><n>i</n><c>));</c><br>
      <c>}</c><br>
      <n>setTimeout</n><c>(() => </c><n>console</n><c>.</c><n>log</n><c>(</c><v>'timeout'</v><c>));</c><br><br>
      <k>// 0 … 499, и только потом timeout</k><br><br>
      <t>Каждый then встаёт в очередь, когда выполнился предыдущий, — пока event loop ещё в шаге «все микрозадачи». Вся цепочка проходит за один заход, без отрисовки между шагами.</t><br><br>
      <b>Стек не переполнится:</b><t>каждая микрозадача стартует с пустого стека</t><br>
      <b>С var вместо let:</b><t>500 раз «500» — переменная одна на весь цикл</t>
      `,
      id: uuidv4(),
      tags: "цепочка then let var",
      link: "https://javascript.info/promise-chaining"
    },
    {
      title: `Бесконечные микрозадачи вешают страницу`,
      text: `
      <f>function</f><c> </c><n>loop</n><c>() { </c><n>queueMicrotask</n><c>(</c><n>loop</n><c>); }</c><k>  // вкладка зависнет</k><br>
      <f>function</f><c> </c><n>loop</n><c>() { </c><n>setTimeout</n><c>(</c><n>loop</n><c>); }</c><k>  // страница живая</k><br><br>
      <t>Очередь микрозадач должна</t><b>опустеть</b><t>до отрисовки и следующей макрозадачи — а она не пустеет никогда (starvation).</t><br><br>
      <b>Вывод:</b><t>тяжёлую работу дробят через</t><b>макрозадачи</b><t>(setTimeout, MessageChannel, scheduler.yield()). Так React-планировщик уступает поток браузеру.</t>
      `,
      id: uuidv4(),
      tags: "queueMicrotask starvation зависание",
      link: "https://developer.mozilla.org/en-US/docs/Web/API/Window/queueMicrotask"
    },
    {
      title: `Ответ сервера — это макрозадача`,
      text: `
      <b>1.</b><n>fetch</n><c>(</c><n>url</n><c>)</c><t>— JS только отдаёт запрос браузеру и получает промис</t><br>
      <b>2.</b><t>Ожидание идёт</t><b>вне JS,</b><t>в сетевом потоке браузера</t><br>
      <b>3.</b><t>Event loop крутится дальше: клики, таймеры, кадры</t><br>
      <b>4.</b><t>Ответ пришёл →</t><b>макрозадача</b><t>→ резолв промиса →</t><b>микрозадача</b><t>с вашим then / кодом после await</t><br><br>
      <c>JS:   [fetch][клик][кадр][кадр][ответ → then]</c><br>
      <c>Сеть:    └──── ждём сервер ────┘</c><br><br>
      <f>const</f><c> </c><n>res</n><c> = </c><f>await</f><c> </c><n>fetch</n><c>(</c><n>url</n><c>);   </c><k>// ждём заголовки</k><br>
      <f>const</f><c> </c><n>data</n><c> = </c><f>await</f><c> </c><n>res</n><c>.</c><n>json</n><c>();  </c><k>// ждём и разбираем тело</k>
      `,
      id: uuidv4(),
      tags: "fetch сеть await ожидание",
      link: "https://javascript.info/event-loop"
    },
    {
      title: `Web Worker: считать, не мешая рендеру`,
      text: `
      <t>У воркера</t><b>свой поток и свой event loop.</b><t>Главный поток в это время рисует и отвечает на клики</t><br><br>
      <f>const</f><c> </c><n>worker</n><c> = </c><f>new</f><c> </c><n>Worker</n><c>(</c><v>'/worker.js'</v><c>);</c><br>
      <n>worker</n><c>.</c><n>postMessage</n><c>(</c><n>rawData</n><c>);</c><k>               // отдали работу</k><br>
      <n>worker</n><c>.</c><n>onmessage</n><c> = (</c><n>e</n><c>) => </c><n>render</n><c>(</c><n>e</n><c>.</c><n>data</n><c>);</c><k>  // получили результат</k><br><br>
      <b>Выносить:</b><t>fetch + JSON.parse больших ответов, сортировку и фильтры, markdown и подсветку кода, поисковый индекс, хеши и сжатие, картинки через OffscreenCanvas</t><br><br>
      <b>Нельзя:</b><t>DOM, window, замеры размеров. Рендер (и React) — только главный поток</t><br><br>
      <b>Подвохи:</b><br>
      <t>postMessage</t><b>копирует</b><t>данные. Без копирования —</t><c>worker.postMessage(buf, [buf])</c><br>
      <t>Старт воркера не бесплатный: выносить то, что дольше</t><b>~50 мс.</b><t>Короче — дробить через scheduler.yield()</t>
      `,
      id: uuidv4(),
      tags: "web worker поток postMessage transferable",
      link: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
    }
  ],
  Promises: [
    {
      title: `Цепочка и веер`,
      text: `
      <t>then</t><b>не меняет</b><t>промис, а</t><b>возвращает новый</b><br><br>
      <b>Цепочка</b><t>— каждый шаг ждёт предыдущий:</t><br>
      <n>p</n><c> = </c><n>p</n><c>.</c><n>then</n><c>(...)</c><k>  // P0 → then0 → then1 → then2</k><br><br>
      <b>Веер</b><t>— все висят на одном промисе:</t><br>
      <n>p</n><c>.</c><n>then</n><c>(...); </c><n>p</n><c>.</c><n>then</n><c>(...); </c><n>p</n><c>.</c><n>then</n><c>(...)</c><br><br>
      <t>С асинхронными шагами по 1 сек:</t><br>
      <t>цепочка ≈ 3 сек, веер ≈ 1 сек</t><br><br>
      <t>Последовательно сегодня пишут так:</t><br>
      <f>for</f><c> (</c><f>const</f><c> </c><n>x</n><c> </c><f>of</f><c> </c><n>list</n><c>) { </c><f>await</f><c> </c><n>work</n><c>(</c><n>x</n><c>); }</c>
      `,
      id: uuidv4(),
      tags: "цепочка веер then последовательно",
      link: "https://javascript.info/promise-chaining"
    },
    {
      title: `Порядок в очереди: цепочка уступает`,
      text: `
      <t>Подписчики промиса встают в очередь</t><b>разом,</b><t>когда он резолвится</t><br><br>
      <b>Веер:</b><br>
      <n>p</n><c>.</c><n>then</n><c>(веер1); </c><n>p</n><c>.</c><n>then</n><c>(веер2); </c><n>p</n><c>.</c><n>then</n><c>(веер3);</c><br>
      <n>Promise</n><c>.</c><n>resolve</n><c>().</c><n>then</n><c>(</c><n>X</n><c>);</c><br>
      <k>// веер1, веер2, веер3, X</k><br><br>
      <b>Цепочка:</b><br>
      <n>Promise</n><c>.</c><n>resolve</n><c>().</c><n>then</n><c>(ц1).</c><n>then</n><c>(ц2).</c><n>then</n><c>(ц3);</c><br>
      <n>Promise</n><c>.</c><n>resolve</n><c>().</c><n>then</n><c>(</c><n>X</n><c>);</c><br>
      <k>// ц1, X, ц2, ц3 — X вклинился</k><br><br>
      <t>Две параллельные цепочки чередуются: A1, B1, A2, B2</t>
      `,
      id: uuidv4(),
      tags: "очередь порядок цепочка веер",
      link: "https://javascript.info/microtask-queue"
    },
    {
      title: `Ошибка течёт только вниз`,
      text: `
      <t>Ошибка отклоняет только промис</t><b>своего</b><t>then. Вверх и вбок не идёт.</t><br><br>
      <c>        </c><n>p</n><c> (успех)</c><br>
      <c>       /         \\</c><br>
      <c>  </c><n>a</n><c> (ошибка)   </c><n>b</n><c> (успех)</c><br><br>
      <b>Цепочка</b><t>— одна длинная ветка: ошибка пропускает все then до ближайшего catch, после catch цепочка продолжается</t><br>
      <b>Веер</b><t>— много коротких веток: падение одной не трогает соседей. Без своего catch будет Uncaught (in promise)</t><br><br>
      <n>Promise</n><c>.</c><n>all</n><t>— как цепочка: первая ошибка роняет всё</t><br>
      <n>Promise</n><c>.</c><n>allSettled</n><t>— как веер: статус каждой ветки</t>
      `,
      id: uuidv4(),
      tags: "ошибка catch all allSettled",
      link: "https://javascript.info/promise-error-handling"
    },
    {
      title: `return промиса из then = +2 тика`,
      text: `
      <n>Promise</n><c>.</c><n>resolve</n><c>()</c><br>
      <c>  .</c><n>then</n><c>(() => { </c><n>log</n><c>(</c><v>'A1'</v><c>); </c><y>return</y><c> </c><n>Promise</n><c>.</c><n>resolve</n><c>(); })</c><br>
      <c>  .</c><n>then</n><c>(() => </c><n>log</n><c>(</c><v>'A2'</v><c>));</c><br>
      <n>Promise</n><c>.</c><n>resolve</n><c>()</c><br>
      <c>  .</c><n>then</n><c>(() => </c><n>log</n><c>(</c><v>'B1'</v><c>)).</c><n>then</n><c>(() => </c><n>log</n><c>(</c><v>'B2'</v><c>))</c><br>
      <c>  .</c><n>then</n><c>(() => </c><n>log</n><c>(</c><v>'B3'</v><c>)).</c><n>then</n><c>(() => </c><n>log</n><c>(</c><v>'B4'</v><c>));</c><br><br>
      <b>A1, B1, B2, B3, A2, B4</b><br><br>
      <t>Возвращённый промис нужно «распаковать» — это 2 лишние микрозадачи: вызвать у него then и дождаться резолва.</t><br>
      <t>С</t><y>return</y><c> </c><v>42</v><t>было бы: A1, B1, A2, B2, B3, B4</t>
      `,
      id: uuidv4(),
      tags: "thenable распаковка тики",
      link: "https://tc39.es/ecma262/#sec-newpromiseresolvethenablejob"
    },
    {
      title: `Последовательно или параллельно`,
      text: `
      <b>Медленно</b><t>— независимые запросы по очереди, время складывается:</t><br>
      <f>for</f><c> (</c><f>const</f><c> </c><n>id</n><c> </c><f>of</f><c> </c><n>ids</n><c>) {</c><br>
      <c>  </c><f>await</f><c> </c><n>fetch</n><c>(</c><v>'/item/'</v><c> + </c><n>id</n><c>);</c><br>
      <c>}</c><br><br>
      <b>Быстро</b><t>— все уходят сразу, сеть ждёт их параллельно:</t><br>
      <f>await</f><c> </c><n>Promise</n><c>.</c><n>all</n><c>(</c><n>ids</n><c>.</c><n>map</n><c>(</c><n>id</n><c> => </c><n>fetch</n><c>(</c><v>'/item/'</v><c> + </c><n>id</n><c>)));</c><br><br>
      <t>Цепочку оставляют, только когда следующий запрос</t><b>зависит</b><t>от ответа предыдущего (сначала id пользователя, потом его заказы)</t>
      `,
      id: uuidv4(),
      tags: "Promise.all await цикл тормозит",
      link: "https://javascript.info/promise-api"
    }
  ],
  Network: [
    {
      title: `Что происходит после Enter`,
      text: `
      <b>1. Разбор ввода:</b><t>адрес или поиск, подставить https, HSTS</t><br>
      <b>2. DNS:</b><t>имя → IP</t><br>
      <b>3. Соединение:</b><t>TCP-рукопожатие, затем TLS</t><br>
      <b>4. HTTP:</b><t>GET / → 200 и HTML (приходит потоком)</t><br>
      <b>5. Парсинг:</b><t>HTML → DOM, CSS → CSSOM, по пути новые запросы</t><br>
      <b>6. Рендеринг:</b><t>layout → paint → composite</t><br>
      <b>7. Экран,</b><t>дальше работает JS и event loop</t><br><br>
      <t>Браузер начинает ещё</t><b>до Enter:</b><t>подсказки, заранее DNS и даже соединение</t>
      `,
      id: uuidv4(),
      tags: "enter адресная строка собеседование",
      link: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work"
    },
    {
      title: `DNS: где ищется адрес`,
      text: `
      <t>От ближнего к дальнему, до первого найденного:</t><br>
      <b>1.</b><t>кэш браузера</t><br>
      <b>2.</b><t>кэш ОС и файл hosts</t><br>
      <b>3.</b><t>роутер</t><br>
      <b>4.</b><t>DNS провайдера (или 8.8.8.8, 1.1.1.1)</t><br><br>
      <t>Если и там нет:</t><br>
      <c>корень → «за .com отвечают те»</c><br>
      <c>.com   → «за site.com отвечает тот»</c><br>
      <c>site.com → «IP: 93.184.216.34»</c><br><br>
      <t>Ответ кэшируется на</t><b>TTL.</b><t>Поэтому после смены IP одни видят новый сервер, другие — старый</t>
      `,
      id: uuidv4(),
      tags: "dns ttl кэш",
      link: "https://developer.mozilla.org/en-US/docs/Glossary/DNS"
    },
    {
      title: `IP, пакет, порт, TCP, UDP`,
      text: `
      <b>IP-адрес</b><t>— адрес дома</t><br>
      <b>Пакет</b><t>— письмо, ~1,4 КБ данных</t><br>
      <b>IP</b><t>— небрежная почта: письма теряются, приходят не по порядку, дублируются</t><br>
      <b>Порт</b><t>— номер квартиры, какая программа (443 — HTTPS)</t><br>
      <b>TCP</b><t>— секретарь: нумерует, ждёт подтверждений (ACK), переотправляет потерянное, выдаёт всё по порядку</t><br>
      <b>UDP</b><t>— без секретаря: быстро, без гарантий (звонки, игры, QUIC)</t><br><br>
      <b>Рукопожатие TCP:</b><br>
      <c>SYN → SYN-ACK → ACK</c>
      `,
      id: uuidv4(),
      tags: "tcp udp ip порт пакет",
      link: "https://hpbn.co/building-blocks-of-tcp/"
    },
    {
      title: `Соединение, запрос, пакет`,
      text: `
      <b>Соединение</b><t>— телефонный звонок: открыли рукопожатием, линия живёт секунды и минуты</t><br>
      <b>Запрос/ответ</b><t>— одна реплика в этом звонке</t><br>
      <b>Пакеты</b><t>— кусочки, на которые режется каждая реплика</t><br><br>
      <t>Соединение задают 4 числа:</t><br>
      <c>мой IP : мой порт ↔ IP сервера : 443</c><br>
      <t>Мой порт для каждого нового соединения свой — поэтому к одному серверу их может быть несколько</t><br><br>
      <b>HTTP</b><t>— формат разговора («что и как сказать»)</t><br>
      <b>TCP</b><t>— линия («как доставить»)</t>
      `,
      id: uuidv4(),
      tags: "соединение запрос пакет звонок",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
    },
    {
      title: `Slow start и первые 14 КБ`,
      text: `
      <t>В начале соединения сервер шлёт</t><b>10 пакетов</b><t>без подтверждения: 10 × 1,4 КБ ≈</t><b>14 КБ</b><br>
      <c>14 → 28 → 56 → 112 КБ ...</c><k>  // порция удваивается</k><br><br>
      <b>Каждое новое соединение начинает с нуля</b><br><br>
      <t>14 КБ сжатого текста ≈ 50–70 КБ HTML/CSS ≈</t><b>1–2 тысячи строк</b><br>
      <t>Влезает: каркас HTML, критический CSS первого экрана, SVG-иконки</t><br>
      <t>Не влезает: фото, шрифты, React (~45 КБ)</t><br><br>
      <t>Это не лимит страницы, а самая быстрая порция — в неё кладут то, что нужно для первого экрана</t>
      `,
      id: uuidv4(),
      tags: "slow start 14kb tcp оптимизация",
      link: "https://hpbn.co/building-blocks-of-tcp/"
    },
    {
      title: `HTTP/1.1, HTTP/2, HTTP/3`,
      text: `
      <b>HTTP/1.1:</b><t>по линии один файл за раз → браузер открывает до</t><b>6 соединений.</b><t>Открывает по мере находок в HTML. Каждое — своё рукопожатие и свой разгон</t><br><br>
      <b>HTTP/2:</b><t>одно соединение, файлы вперемешку. Но TCP видит одну ленту байтов:</t><br>
      <c>[css][js][ ✗ img ][css][js]</c><k>  // ждут все</k><br>
      <b>head-of-line blocking</b><br><br>
      <b>HTTP/3 (QUIC поверх UDP):</b><t>порядок держится отдельно для каждого файла, ждёт только картинка. Плюс быстрее рукопожатие и переживает смену Wi-Fi → мобильная сеть</t><br><br>
      <t>Подсказать браузеру соединиться заранее:</t><br>
      <c><link rel="preconnect" href="https://cdn.site.com"></c>
      `,
      id: uuidv4(),
      tags: "http2 http3 quic head-of-line",
      link: "https://hpbn.co/http2/"
    },
    {
      title: `TLS (бывший SSL)`,
      text: `
      <b>Transport Layer Security</b><t>— шифрование поверх TCP, https и замочек</t><br><br>
      <b>Тайна:</b><t>посторонние видят кашу байтов</t><br>
      <b>Подлинность:</b><t>это правда site.com</t><br>
      <b>Целостность:</b><t>подмену байта заметят</t><br><br>
      <b>1.</b><t>Сервер показывает сертификат, подписанный доверенным центром</t><br>
      <b>2.</b><t>Браузер проверяет подпись и имя</t><br>
      <b>3.</b><t>Стороны вычисляют общий ключ — даже если их подслушивают</t><br>
      <b>4.</b><t>Дальше всё шифруется</t><br><br>
      <t>Балансировщик часто снимает TLS на входе, дальше запрос идёт по внутренней сети</t>
      `,
      id: uuidv4(),
      tags: "tls ssl https сертификат",
      link: "https://developer.mozilla.org/en-US/docs/Glossary/TLS"
    },
    {
      title: `Картинка опоздала: layout shift`,
      text: `
      <t>CSS блокирует отрисовку, картинки —</t><b>нет.</b><t>Без размеров у img браузер даёт ей 0 px, а когда она приходит, всё ниже</t><b>прыгает</b><br><br>
      <t>Резервируем место заранее:</t><br>
      <c><img src="photo.jpg" width="800" height="600"></c><br>
      <n>img</n><c> { </c><n>aspect</n><c>-</c><n>ratio</n><c>: </c><v>4</v><c> / </c><v>3</v><c>; </c><n>width</n><c>: </c><v>100</v><c>%; }</c><br><br>
      <t>JS, который один раз измерил позиции до картинки, работает со старыми координатами. Лучше</t><n>IntersectionObserver</n><br><br>
      <n>DOMContentLoaded</n><t>— HTML разобран, картинки могут быть в пути</t><br>
      <n>load</n><t>— пришло всё</t><br><br>
      <t>QUIC тут не поможет: это вопрос вёрстки, а не транспорта</t>
      `,
      id: uuidv4(),
      tags: "cls layout shift img размеры",
      link: "https://web.dev/articles/cls"
    },
    {
      title: `JS в первых 14 КБ или готовый HTML`,
      text: `
      <b>Готовый HTML (SSR):</b><br>
      <c>пришли байты → браузер сразу рисует</c><br>
      <t>HTML рисуется потоком, кусок за куском</t><br><br>
      <b>JS, который рисует по шаблону (CSR):</b><br>
      <c>JS пришёл → разбор → выполнение → запрос данных → ответ → рисуем</c><br><br>
      <b>1.</b><t>Скрипт выполняется только целиком — экран пока пустой</t><br>
      <b>2.</b><t>Шаблону нужны данные — ещё одна поездка до сервера</t><br>
      <b>3.</b><t>В 14 КБ мало влезает: React ~45 КБ, Preact ~4 КБ</t><br><br>
      <b>Гибрид — гидратация:</b><t>сервер шлёт готовый HTML, JS догружается и «оживляет» кнопки. Так работают Next.js и Nuxt</t>
      `,
      id: uuidv4(),
      tags: "ssr csr гидратация 14kb next",
      link: "https://web.dev/articles/rendering-on-the-web"
    }
  ],
  Server: [
    {
      title: `Путь запроса на сервере`,
      text: `
      <c>вы → [CDN] → [балансировщик] → [приложение] → [БД]</c><br><br>
      <b>CDN</b><t>— копии файлов по миру, отвечает ближайший узел</t><br>
      <b>Балансировщик / reverse proxy</b><t>(nginx) — принимает соединение, снимает TLS, раздаёт по серверам</t><br>
      <b>Приложение</b><t>— роутинг (/users/42 → обработчик), авторизация, логика</t><br>
      <b>Данные</b><t>— база, кэш (Redis), другие сервисы</t><br><br>
      <t>Сервер «слушает» порт, TCP-рукопожатие делает</t><b>ОС</b><t>и складывает готовые соединения в очередь</t>
      `,
      id: uuidv4(),
      tags: "cdn nginx балансировщик сервер",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
    },
    {
      title: `Поток на соединение или event loop`,
      text: `
      <t>Почти всё время запроса — это</t><b>ожидание</b><t>(база ~5 мс против ~0,1 мс работы)</t><br><br>
      <b>Поток на соединение:</b><t>простой код, но ~1 МБ стека на поток, 10 000 спящих потоков — гигабайты (проблема C10K)</t><br><br>
      <b>Event loop:</b><t>один поток, ОС будит при данных на любом сокете (epoll). Не ждёт, а идёт к следующему. Минус — тяжёлый расчёт держит всех</t><br><br>
      <b>Гибриды:</b><br>
      <t>Node / nginx — процесс на ядро, в каждом свой loop</t><br>
      <t>Go — пишешь просто, горутины по несколько КБ, внутри event loop</t><br><br>
      <t>Потоки нужны, чтобы</t><b>ждать</b><t>(тут loop лучше) и чтобы</t><b>считать на всех ядрах</b>
      `,
      id: uuidv4(),
      tags: "c10k epoll node nginx go потоки",
      link: "http://www.kegel.com/c10k.html"
    },
    {
      title: `Гонки в однопоточном JS`,
      text: `
      <f>async</f><c> </c><f>function</f><c> </c><n>buy</n><c>() {</c><br>
      <c>  </c><f>const</f><c> </c><n>balance</n><c> = </c><f>await</f><c> </c><n>getBalance</n><c>();</c><k>  // оба прочитали 100</k><br>
      <c>  </c><f>if</f><c> (</c><n>balance</n><c> >= </c><v>100</v><c>) {</c><br>
      <c>    </c><f>await</f><c> </c><n>setBalance</n><c>(</c><n>balance</n><c> - </c><v>100</v><c>);</c><k>  // оба списали</k><br>
      <c>  }</c><br>
      <c>}</c><br><br>
      <t>Каждый</t><f>await</f><t>— граница макрозадач. Между «прочитал» и «записал» event loop берёт чужие запросы</t><br><br>
      <b>Правило:</b><t>всё неделимое — без await посередине. Если без await никак, неделимость обеспечивает база</t><br><br>
      <t>Гонка — это не про потоки, а про</t><b>щель между «прочитал» и «записал»</b>
      `,
      id: uuidv4(),
      tags: "race condition гонка await",
      link: "https://en.wikipedia.org/wiki/Race_condition"
    },
    {
      title: `Атомарный UPDATE`,
      text: `
      <f>UPDATE</f><c> </c><n>accounts</n><c> </c><f>SET</f><c> </c><n>balance</n><c> = </c><n>balance</n><c> - </c><v>100</v><br>
      <f>WHERE</f><c> </c><n>id</n><c> = </c><v>42</v><c> </c><f>AND</f><c> </c><n>balance</n><c> >= </c><v>100</v><c>;</c><br><br>
      <t>Чтение, проверка и запись — одна команда. База блокирует строку, второй запрос ждёт и видит уже свежее значение:</t><br><br>
      <c>A: 100 >= 100 ✓ → 0</c><br>
      <c>B: ждал... 0 >= 100 ✗ → 0 строк</c><br><br>
      <t>В коде смотрим число обновлённых строк: 1 — покупка прошла, 0 — денег не хватило</t>
      `,
      id: uuidv4(),
      tags: "sql update атомарность блокировка",
      link: "https://www.postgresql.org/docs/current/explicit-locking.html"
    },
    {
      title: `Транзакции и FOR UPDATE`,
      text: `
      <b>Всё или ничего:</b><br>
      <f>BEGIN</f><c>;</c><br>
      <f>UPDATE</f><c> </c><n>accounts</n><c> </c><f>SET</f><c> </c><n>balance</n><c> = </c><n>balance</n><c> - </c><v>100</v><c> </c><f>WHERE</f><c> </c><n>id</n><c> = </c><v>'аня'</v><c>;</c><br>
      <f>UPDATE</f><c> </c><n>accounts</n><c> </c><f>SET</f><c> </c><n>balance</n><c> = </c><n>balance</n><c> + </c><v>100</v><c> </c><f>WHERE</f><c> </c><n>id</n><c> = </c><v>'боря'</v><c>;</c><br>
      <f>COMMIT</f><c>;</c><k>  // при ошибке — ROLLBACK, как будто ничего не было</k><br><br>
      <t>Транзакция сама по себе</t><b>не спасает от гонки.</b><t>Строку запирают при чтении:</t><br>
      <f>SELECT</f><c> </c><n>balance</n><c> </c><f>FROM</f><c> </c><n>accounts</n><c> </c><f>WHERE</f><c> </c><n>id</n><c> = </c><v>'аня'</v><c> </c><f>FOR</f><c> </c><f>UPDATE</f><c>;</c><br>
      <t>Остальные ждут у двери до COMMIT</t><br><br>
      <t>Вся инженерия — борьба с</t><b>гонками</b><t>и</t><b>обрывами:</b><t>не оставлять мир в полуготовом состоянии</t>
      `,
      id: uuidv4(),
      tags: "транзакция for update rollback",
      link: "https://www.postgresql.org/docs/current/explicit-locking.html"
    },
    {
      title: `Оптимистичная блокировка`,
      text: `
      <t>Не запираем строку, а перед записью проверяем, что её никто не менял</t><br><br>
      <f>SELECT</f><c> </c><n>balance</n><c>, </c><n>version</n><c> </c><f>FROM</f><c> </c><n>accounts</n><c> </c><f>WHERE</f><c> </c><n>id</n><c> = </c><v>42</v><c>;</c><k>  // version = 7</k><br>
      <f>UPDATE</f><c> </c><n>accounts</n><c> </c><f>SET</f><c> </c><n>balance</n><c> = </c><v>0</v><c>, </c><n>version</n><c> = </c><n>version</n><c> + </c><v>1</v><br>
      <f>WHERE</f><c> </c><n>id</n><c> = </c><v>42</v><c> </c><f>AND</f><c> </c><n>version</n><c> = </c><v>7</v><c>;</c><br><br>
      <c>A: version 7 → ✓ (стала 8)</c><br>
      <c>B: version 7 → 0 строк ✗ → перечитать и повторить</c><br><br>
      <b>Пессимистичная</b><t>(FOR UPDATE) — конфликты частые: баланс, остатки на распродаже</t><br>
      <b>Оптимистичная</b><t>— конфликты редкие: профиль, статья. «Документ изменён другим пользователем»</t>
      `,
      id: uuidv4(),
      tags: "optimistic locking version конкурентность",
      link: "https://en.wikipedia.org/wiki/Optimistic_concurrency_control"
    },
    {
      title: `Балансировщик`,
      text: `
      <t>Один адрес сайта, много одинаковых копий приложения. Балансировщик — администратор в ресторане</t><br><br>
      <c>                     ┌→ сервер 1 ✓</c><br>
      <c>вы → [балансировщик] ├→ сервер 2 ✗ пропускаем</c><br>
      <c>                     └→ сервер 3 ✓</c><br><br>
      <b>Round robin</b><t>— по кругу: 1, 2, 3, 1…</t><br>
      <b>Least connections</b><t>— кому меньше всего открытых соединений</t><br>
      <b>IP hash</b><t>— один пользователь всегда на одном сервере</t><br><br>
      <b>Health check:</b><t>регулярно спрашивает «ты жив?», упавший сервер выпадает из раздачи</t>
      `,
      id: uuidv4(),
      tags: "балансировщик round robin health check",
      link: "https://nginx.org/en/docs/http/load_balancing.html"
    },
    {
      title: `nginx: конфиг`,
      text: `
      <t>Статика, reverse proxy, балансировка и HTTPS в одном конфиге:</t><br><br>
      <f>upstream </f><n>app</n><c> {</c><br>
      <c>    </c><f>server </f><v>10.0.0.1:3000</v><c>;</c><br>
      <c>    </c><f>server </f><v>10.0.0.2:3000</v><c>;</c><k>   # least_conn; — наименее загруженному</k><br>
      <c>}</c><br>
      <f>server</f><c> {</c><br>
      <c>    </c><f>listen </f><v>443 ssl</v><c>;</c><br>
      <c>    </c><f>server_name </f><v>site.com</v><c>;</c><br>
      <c>    </c><f>ssl_certificate </f><v>/etc/ssl/site.crt</v><c>;</c><br>
      <c>    </c><f>location </f><v>/static/</v><c> { </c><f>root </f><v>/var/www</v><c>; }</c><k>  # файлы с диска</k><br>
      <c>    </c><f>location </f><v>/api/</v><c> { </c><f>proxy_pass </f><v>http://app</v><c>; }</c><k>  # в приложение</k><br>
      <c>}</c><br><br>
      <t>Внутри — event loop: процесс на ядро, тысячи соединений в каждом</t>
      `,
      id: uuidv4(),
      tags: "nginx upstream proxy_pass location reverse proxy",
      link: "https://nginx.org/en/docs/beginners_guide.html"
    }
  ],
  Queues: [
    {
      title: `Зачем очередь сообщений`,
      text: `
      <t>Регистрация: сохранить в базу, отправить письмо, сжать аватарку, сообщить аналитике</t><br><br>
      <t>Сервер делает</t><b>только главное</b><t>(база), остальное кладёт задачами в очередь и сразу отвечает «готово». Воркеры разбирают очередь в своём темпе</t><br><br>
      <c>сервер → [ очередь: 📧 🖼️ 📊 ] → воркеры</c><br><br>
      <b>Быстрый ответ</b><t>— пользователь не ждёт медленное</t><br>
      <b>Сбои</b><t>— почта упала, письма ждут в очереди</t><br>
      <b>Пики</b><t>— 10 000 заказов встают в очередь, ничего не падает</t><br>
      <b>Масштаб</b><t>— не успевают? Ещё воркеров</t><br><br>
      <t>RabbitMQ, Kafka, Redis, SQS —</t><b>брокеры сообщений.</b><t>Это event loop в масштабе системы</t>
      `,
      id: uuidv4(),
      tags: "очередь rabbitmq брокер воркер",
      link: "https://www.rabbitmq.com/tutorials/tutorial-two-javascript"
    },
    {
      title: `Воркер упал: ack`,
      text: `
      <t>Без подтверждений: выдали задачу → удалили → воркер упал →</t><b>задача потеряна</b><br><br>
      <b>С ack:</b><br>
      <b>1.</b><t>Задачу выдали, но не удалили: «жду подтверждения»</t><br>
      <b>2.</b><t>Воркер</t><b>полностью</b><t>сделал работу → ack → удаляем</t><br>
      <b>3.</b><t>ack не пришёл → задача уходит другому воркеру</t><br><br>
      <c>очередь → 📧 → воркер 1 💥  (ack нет)</c><br>
      <c>очередь → 📧 → воркер 2 ✓ ack → удалена</c><br><br>
      <t>Падение брокер видит по оборванному TCP-соединению с воркером</t>
      `,
      id: uuidv4(),
      tags: "ack подтверждение redelivery",
      link: "https://www.rabbitmq.com/docs/confirms"
    },
    {
      title: `Порядок задач не гарантирован`,
      text: `
      <t>А «создать заказ», Б «письмо о заказе»:</t><br>
      <c>воркер 1 взял А 💥 → воркер 2 взял Б → заказа нет ✗</c><br>
      <t>И без падений: несколько воркеров, Б просто быстрее</t><br><br>
      <b>1. Цепочка:</b><t>в очередь кладут только А, воркер</t><b>после А</b><t>сам ставит Б (как цепочка промисов)</t><br>
      <b>2. Один потребитель на ключ:</b><t>всё про заказ 42 — в один раздел, читается по порядку (Kafka partitions)</t><br>
      <b>3. Отложить:</b><t>Б видит, что заказа нет, и возвращает себя в очередь с задержкой</t><br><br>
      <t>Если Б зависит от А — это не две параллельные задачи, а одна цепочка</t>
      `,
      id: uuidv4(),
      tags: "порядок зависимые задачи kafka partition",
      link: "https://kafka.apache.org/documentation/#intro_concepts_and_terms"
    },
    {
      title: `At most / at least / exactly once`,
      text: `
      <t>Воркер отправил письмо и упал</t><b>до ack</b><t>→ задачу отдадут снова →</t><b>письмо дважды</b><br><br>
      <t>Между «сделал» и «подтвердил» всегда есть момент для падения. Выбираем, какая ошибка менее страшна:</t><br><br>
      <b>At most once</b><t>— удалить сразу. Дублей нет, но можно потерять</t><br>
      <b>At least once</b><t>— удалить после ack. Не теряем, но возможны дубли</t><br>
      <b>Exactly once</b><t>— в общем виде недостижим</t><br><br>
      <t>Та же щель, что в гонках: там «прочитал → записал», здесь «сделал → подтвердил»</t><br><br>
      <b>Рецепт:</b><t>at least once + идемпотентность</t>
      `,
      id: uuidv4(),
      tags: "at least once exactly once гарантии доставки дубли",
      link: "https://www.rabbitmq.com/docs/reliability"
    },
    {
      title: `Идемпотентность`,
      text: `
      <t>Повторное выполнение не меняет результат. У задачи уникальный id:</t><br><br>
      <f>BEGIN</f><c>;</c><br>
      <n>INSERT</n><c> </c><n>INTO</n><c> </c><n>processed</n><c> (</c><n>message_id</n><c>) </c><n>VALUES</n><c> (</c><v>'abc-123'</v><c>);</c><br>
      <f>UPDATE</f><c> </c><n>accounts</n><c> </c><f>SET</f><c> </c><n>balance</n><c> = </c><n>balance</n><c> - </c><v>100</v><c> </c><f>WHERE</f><c> </c><n>id</n><c> = </c><v>42</v><c>;</c><br>
      <f>COMMIT</f><c>;</c><br><br>
      <t>id уже есть → ошибка уникальности → уже сделано, просто ack</t><br><br>
      <b>Важно:</b><t>отметка «сделано» и работа —</t><b>в одной транзакции,</b><t>иначе снова щель «списал, но не записал»</t><br><br>
      <b>Внешний сервис</b><t>(платёж, почта) — передаём ключ ему:</t><br>
      <n>Idempotency</n><c>-</c><n>Key</n><c>: </c><n>abc</n><c>-</c><v>123</v><t>— тот же ключ дважды проведут один раз</t>
      `,
      id: uuidv4(),
      tags: "идемпотентность idempotency key дубли",
      link: "https://docs.stripe.com/api/idempotent_requests"
    },
    {
      title: `RabbitMQ или Kafka`,
      text: `
      <b>RabbitMQ — почтовый ящик:</b><t>забрали, ack — сообщение удалено. Очередь = то, что ещё не обработано</t><br>
      <b>Kafka — журнал:</b><t>сообщения дописываются в конец и хранятся дни и недели. Читатель помнит, до какой строки дочитал (offset)</t><br><br>
      <c>RabbitMQ: [📧 📧 📧] → забрали → удалили</c><br>
      <c>Kafka:    [0][1][2][3][4] ... каждый читатель на своём offset</c><br><br>
      <b>RabbitMQ — для задач:</b><t>ack и повтор на каждое сообщение, задержки, приоритеты, dead letter queue, гибкая маршрутизация, проще в эксплуатации</t><br>
      <b>Kafka — для событий:</b><t>много независимых читателей, огромные объёмы, перечитать историю, сверка (reconciliation)</t><br><br>
      <t>Надёжность одинаково серьёзная. Дубли у Kafka те же: обработал и упал до сохранения offset → at least once → нужна идемпотентность</t>
      `,
      id: uuidv4(),
      tags: "rabbitmq kafka журнал лог offset отличия",
      link: "https://kafka.apache.org/documentation/#intro_concepts_and_terms"
    },
    {
      title: `Kafka: разделы и ключ`,
      text: `
      <t>Тема делится на</t><b>разделы</b><t>— каждый отдельный журнал со своим порядком. Раздел выбирается по хешу</t><b>ключа</b><br><br>
      <c>тема «платежи»:</c><br>
      <c>  раздел 0: [счёт 42][счёт 17][счёт 42][счёт 42]</c><br>
      <c>  раздел 1: [счёт 5 ][счёт 99][счёт 5 ]</c><br><br>
      <b>Одинаковый ключ — всегда один раздел:</b><t>все операции счёта 42 строго по порядку, а разные разделы читаются параллельно</t><br><br>
      <t>Порядок гарантирован</t><b>внутри ключа,</b><t>а не глобально. Банку это и нужно: важен порядок операций одного счёта</t><br><br>
      <b>Правило:</b><t>читателей в группе не больше, чем разделов — лишний будет простаивать. Нужна параллельность — заранее больше разделов</t>
      `,
      id: uuidv4(),
      tags: "kafka partition раздел ключ порядок",
      link: "https://kafka.apache.org/documentation/#intro_concepts_and_terms"
    },
    {
      title: `Kafka на примере банка`,
      text: `
      <t>Аня (счёт 42) → раздел 0, Боря (счёт 5) → раздел 1</t><br><br>
      <b>1.</b><t>Аня +1000, кофе −300: оба события в разделе 0 по порядку. Баланс пока 0 — события ещё не прочитаны</t><br>
      <b>2.</b><t>Проводки читают оба раздела параллельно: Аня 700, Боря 300. Если бы −300 пришло раньше +1000 — ушли бы в ноль</t><br>
      <b>3.</b><t>Уведомления — другая группа читателей: тот же раздел со своего offset, Ане 2 пуша. События не удалены</t><br>
      <b>4.</b><t>Такси −100: проводки списали и записали op4 в «проведённые» (одна транзакция), упали до сохранения offset</t><br>
      <b>5.</b><t>Перезапуск: op4 пришло снова, но уже проведено → пропуск. Баланс 600, а не 500</t><br><br>
      <b>Итог:</b><t>ключ → порядок, группы → независимые сервисы, offset + идемпотентность → без двойных списаний</t>
      `,
      id: uuidv4(),
      tags: "kafka пример банк consumer group offset идемпотентность",
      link: "https://claude.ai/artifact/KMf2shSfhoEy4QWB9eRYJS"
    }
  ],
  Kubernetes: [
    {
      title: `Зачем Kubernetes`,
      text: `
      <t>Сотни микросервисов, у каждого несколько копий. Нужно решать: на каком сервере запустить, поднять упавшую копию, перенести всё со сгоревшего сервера, добавить копий под нагрузку, выкатить версию без простоя</t><br><br>
      <b>Kubernetes (k8s)</b><t>делает это сам. Вы описываете</t><b>что хотите:</b><t>«проводки, 5 копий, по 1 ГБ памяти», а он решает</t><b>где и как</b><t>и постоянно следит, чтобы так и было</t><br><br>
      <b>Декларативный подход:</b><t>описываем желаемое состояние, кубер бесконечно приводит реальность к нему</t>
      `,
      id: uuidv4(),
      tags: "kubernetes k8s кубер микросервисы декларативный",
      link: "https://kubernetes.io/docs/concepts/overview/"
    },
    {
      title: `Нода, под, контейнер`,
      text: `
      <c>нода (сервер)</c><br>
      <c> └── под (обёртка кубера)</c><br>
      <c>      └── контейнер (ваш docker-образ, запущенный)</c><br><br>
      <b>Нода</b><t>— сервер, где раньше вы делали docker run</t><br>
      <b>Контейнер</b><t>— запущенный образ. Образ = установочный диск, контейнер = запущенная игра</t><br>
      <b>Под</b><t>— минимальная единица кубера: один или несколько контейнеров с</t><b>общим IP</b><t>(видят друг друга как localhost), общими папками, живут и умирают вместе</t><br><br>
      <t>Обычно в поде один контейнер. Второй —</t><b>sidecar,</b><t>например сборщик логов рядом с бэкендом</t><br><br>
      <b>Поды временные:</b><t>их постоянно пересоздают, поэтому ничего важного «у себя» не храним — логи сразу вывозим, данные в базе и Kafka</t>
      `,
      id: uuidv4(),
      tags: "pod node container sidecar под нода",
      link: "https://kubernetes.io/docs/concepts/workloads/pods/"
    },
    {
      title: `Service и Ingress`,
      text: `
      <t>IP пода временный — пересоздали, и адрес другой. Поэтому обращаются к</t><b>Service</b><br><br>
      <c>уведомления → http://provodki → Service</c><br>
      <c>                 ├→ под 10.1.0.7</c><br>
      <c>                 ├→ под 10.1.0.9</c><br>
      <c>                 └→ под 10.2.0.4</c><br><br>
      <b>Service</b><t>— постоянное имя перед группой подов и встроенный балансировщик: знает, кто сейчас жив и готов</t><br>
      <b>Ingress</b><t>— вход из интернета: «site.com/api → Service provodki». Часто это ingress-nginx с теми же location и proxy_pass</t><br><br>
      <c>интернет → Ingress (nginx) → Service → поды → Kafka → другие поды</c>
      `,
      id: uuidv4(),
      tags: "service ingress nginx балансировка кубер",
      link: "https://kubernetes.io/docs/concepts/services-networking/service/"
    },
    {
      title: `Deployment и самолечение`,
      text: `
      <n>kind</n><c>: </c><n>Deployment</n><br>
      <n>spec</n><c>:</c><br>
      <c>  </c><n>replicas</n><c>: </c><v>3</v><k>                 # хочу 3 копии</k><br>
      <c>  </c><n>template</n><c>:</c><br>
      <c>    </c><n>spec</n><c>:</c><br>
      <c>      </c><n>containers</n><c>:</c><br>
      <c>        - image: bank/provodki:1.4</c><br><br>
      <b>Контроллер</b><t>— бесконечный цикл: сколько подов есть? сколько надо? не хватает — создаю. Упал под, сгорела нода — восстановит</t><br><br>
      <b>Пробы:</b><br>
      <b>liveness</b><t>— «ты жив?» Не отвечает несколько раз → перезапуск</t><br>
      <b>readiness</b><t>— «готов принимать запросы?» Пока стартует и прогревается, Service не шлёт ему трафик</t>
      `,
      id: uuidv4(),
      tags: "deployment replicas liveness readiness probe контроллер",
      link: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
    },
    {
      title: `Rolling update и откат`,
      text: `
      <t>Меняем образ на</t><c>bank/provodki:1.5</c><t>— кубер обновляет постепенно:</t><br><br>
      <c>[1.4] [1.4] [1.4] [1.5 стартует…]</c><br>
      <c>[1.4] [1.4] [1.4] [1.5 ✓ готов]</c><k>   # readiness прошла</k><br>
      <c>[1.4] [1.4] [1.5] [1.5 …]</c><k>        # один старый убран</k><br>
      <c>[1.5] [1.5] [1.5]</c><br><br>
      <t>Старый под убирается</t><b>только после</b><t>того, как новый прошёл readiness. Сломанная 1.5 не пройдёт её — выкатка встанет, 1.4 продолжит работать</t><br><br>
      <c>kubectl rollout undo deployment/provodki</c><k>  # откат</k><br><br>
      <b>Ловушка:</b><t>во время выкатки старая и новая версии работают</t><b>одновременно</b><t>— с одной базой и одними сообщениями Kafka</t>
      `,
      id: uuidv4(),
      tags: "rolling update rollout undo откат релиз без простоя",
      link: "https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/"
    },
    {
      title: `Миграции без простоя: expand / contract`,
      text: `
      <t>Переименовать phone → phone_number одним релизом нельзя: во время rolling update старые поды пишут в phone, новые читают phone_number — данные разъезжаются, откат ломается</t><br><br>
      <b>1. Expand:</b><t>миграция добавляет phone_number</t><br>
      <b>2. Релиз A:</b><t>пишет в обе колонки, читает старую</t><br>
      <b>3. Backfill:</b><t>фоном копируем старые строки phone → phone_number</t><br>
      <b>4. Релиз B:</b><t>пишет в обе, читает новую</t><br>
      <b>5. Релиз C:</b><t>только phone_number</t><br>
      <b>6. Contract:</b><t>миграция удаляет phone</t><br><br>
      <t>Рядом живут только соседние версии, и они понимают друг друга. Откат возможен на любом шаге</t><br><br>
      <b>Сжать:</b><t>чтение</t><n>phone_number</n><c> ?? </c><n>phone</n><t>и feature flag вместо релиза → часто 2 релиза и 2 миграции. Просто</t><b>добавить</b><t>колонку можно одним релизом</t>
      `,
      id: uuidv4(),
      tags: "expand contract миграция колонка rolling update совместимость",
      link: "https://martinfowler.com/bliki/ParallelChange.html"
    }
  ],
  "Хаки": [
    {
      title: `Speculation rules: мгновенные переходы`,
      text: `
      <t>Обычно весь путь DNS → соединение → запрос → разбор → отрисовка идёт</t><b>после</b><t>клика.</t><br>
      <t>Идея: браузер заранее, в невидимой вкладке,</t><b>загружает и отрисовывает</b><t>страницу, на которую вероятно перейдут. При клике — просто показывает готовую</t><br><br>
      <c><script type="speculationrules"></c><br>
      <c>{</c><br>
      <c>  "prerender": [{</c><br>
      <c>    "where": { "href_matches": "/product/*" },</c><br>
      <c>    "eagerness": "moderate"</c><br>
      <c>  }]</c><br>
      <c>}</c><br>
      <c></script></c><br><br>
      <b>prerender</b><t>— скачать и отрисовать (мгновенно, но дороже)</t><br>
      <b>prefetch</b><t>— только скачать HTML (дешевле, выигрыш меньше)</t><br><br>
      <t>Chromium-браузеры (Chrome, Edge, Яндекс). Остальные просто игнорируют блок — ничего не ломается</t>
      `,
      id: uuidv4(),
      tags: "speculation rules prerender prefetch мгновенный переход",
      link: "https://developer.chrome.com/docs/web-platform/prerender-pages"
    },
    {
      title: `Speculation rules: eagerness и грабли`,
      text: `
      <t>Отрисовка заранее не бесплатна: трафик, процессор, батарея, нагрузка на сервер. Когда начинать:</t><br><br>
      <c>immediate     сразу, как увидел правило</c><br>
      <c>eager         чуть менее агрессивно</c><br>
      <c>moderate      курсор задержался на ссылке ~200 мс</c><k>  // обычно лучший</k><br>
      <c>conservative  только в момент нажатия / касания</c><br><br>
      <b>Аналитика:</b><t>заранее отрисованная страница может засчитать просмотр. Проверять</t><c>document.prerendering</c><t>и считать по событию</t><c>prerenderingchange</c><br>
      <b>Ссылки с действием</b><t>(/logout, /cart/add?id=5) исключать — иначе действие выполнится без клика</t>
      `,
      id: uuidv4(),
      tags: "speculation rules eagerness moderate prerendering аналитика",
      link: "https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API"
    }
  ],
  Terminal: [
    {
      title: `Порт занят: EADDRINUSE`,
      text: `
      <f>Error:</f><c> listen </c><v>EADDRINUSE</v><c>: address already in use :::3000</c><br><br>
      <t>На порту уже кто-то сидит — обычно забытый</t><n>npm</n><c> </c><v>start</v><t>в другом терминале</t><br><br>
      <b>Убить того, кто слушает порт:</b><br>
      <n>lsof</n><c> </c><f>-ti</f><c> </c><v>:3000</v><c> </c><f>-sTCP:LISTEN</f><c> </c><c>|</c><c> </c><n>xargs</n><c> </c><n>kill</n><br>
      <n>lsof</n><c> </c><f>-ti</f><c> </c><v>:3000</v><c> </c><f>-sTCP:LISTEN</f><c> </c><c>|</c><c> </c><n>xargs</n><c> </c><n>kill</n><c> </c><v>-9</v><k>  // если не умирает</k><br><br>
      <t>Или найти терминал с сервером и нажать</t><b>Ctrl+C</b><br><br>
      <t>Без</t><f>-sTCP:LISTEN</f><t>вы получите и сервер, и клиентов (например, вкладку браузера на localhost) — поэтому PID бывает два</t>
      `,
      id: uuidv4(),
      tags: "порт eaddrinuse kill lsof 3000 8080",
      link: "https://ss64.com/mac/lsof.html"
    },
    {
      title: `lsof — List Open Files`,
      text: `
      <t>В Unix</t><b>«всё есть файл»:</b><t>файлы, папки, сокеты, сетевые соединения. Поэтому lsof показывает и кто держит файл, и кто занял порт</t><br><br>
      <n>lsof</n><c> </c><f>-i</f><c> </c><v>:3000</v><k>        // кто использует порт (таблица)</k><br>
      <n>lsof</n><c> </c><f>-ti</f><c> </c><v>:3000</v><k>       // только PID</k><br>
      <n>lsof</n><c> </c><f>-i</f><c> </c><v>:3000</v><c> </c><f>-sTCP:LISTEN</f><k>  // только сервер</k><br>
      <n>lsof</n><c> </c><f>-p</f><c> </c><v>1789</v><k>         // все файлы и соединения процесса</k><br>
      <n>lsof</n><c> </c><v>~/file.txt</v><k>      // кто держит файл (флешка «используется»)</k><br><br>
      <b>В таблице:</b><t>COMMAND — программа,</t><b>LISTEN</b><t>— сервер,</t><b>ESTABLISHED</b><t>— подключение</t><br><br>
      <b>Пайп:</b><n>lsof</n><c> </c><f>-ti</f><c> </c><v>:3000</v><c> </c><c>|</c><c> </c><n>xargs</n><c> </c><n>kill</n><br>
      <t>lsof печатает PID → | передаёт вывод дальше → xargs подставляет его в kill</t>
      `,
      id: uuidv4(),
      tags: "lsof порт pid xargs kill",
      link: "https://ss64.com/mac/lsof.html"
    }
  ],
  Node: [
    {
      title: `NVM изменение версии`,
      text: `
      <c>nvm install 8.9.4

      nvm ls-remote

      nvm ls available

      nvm use 8.9.4

      nvm install v9.0.0 --reinstall-packages-from=8.9</c><t>By running the above, nvm will install Node.js version 9.0.0, the corresponding npm version, and reinstall the npm packages you had installed on the 8.9 version.</t>
      `,
      id: uuidv4(),
      tags: "",
      link: "https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/"
    }
  ],
  "Jest, Enzyme": [
    {
      title: `zzzzzzzzzzz`,
      text: `<c>
      it('my fn mousemove', () => {
          const fnFromProps = jest.fn();
          const valueFromProps = 'valueFromProps';
          const wrapper = shallow(
              <Fn 
                  fnFromProps={fnFromProps}
                  valueFromProps={valueFromProps}
              />
          );
          wrapper.find('p').simulate('mouseMove');
          expect(fnFromProps).toHaveBeenCalledWith(valueFromProps);
      });
      

      export class Fn extends React.Component{
        handleMouseMove = () => {
            const { fnFromProps = () => this.props.fnFromProps, valueFromProps } = this.props;
            fnFromProps(valueFromProps)
        }

        render() {
            return(
                <div>
                    <p onMouseMove={this.handleMouseMove}>sadasdasd</p>
                </div>
            ) 
        }

      }`,
      id: uuidv4(),
      tags: "",
      link: "zzzzzzzzzz"
    },
    {
      title: "Usual",
      text: `
        <b>Функция:<c>
        export function fn(a, b, cb = () => {}) {
          for (let i = 0; i < 3; i++) {
            cb(a, b);
          }
          return a + b;
        }</c>
        <br>
        <br>
        <c>
        import React from "react";
        import ReactDOM from "react-dom";
        import App, { fn, myAPI, serialAPIRequests } from "./App";
        import _ from "lodash";
        import { shallow } from "enzyme";

        it("renders without crashing", () => {
          const div = document.createElement("div");
          ReactDOM.render(<App />, div);
          ReactDOM.unmountComponentAtNode(div);
        });

        describe("tests", () => {
          it("should return 5", () => {
            expect(fn(2, 3)).toEqual(5);
          });

          it("have been called with 2,3", () => {
            const testFn = jest.fn();
            fn(2, 3, testFn);
            expect(testFn).toHaveBeenCalledWith(2, 3);
          });

          it("have been called", () => {
            const testFn = jest.fn();
            fn(1, 2, testFn);
            expect(testFn).toHaveBeenCalled();
          });

          it("have been called 3 times", () => {
            const testFn = jest.fn();
            fn(1, 2, testFn);
            expect(testFn).toHaveBeenCalledTimes(3);
          });

          it('Has an <a> with "Learn React"', () => {
            const wrap = shallow(<App />);
            expect(wrap.find("a").text()).toBe("Learn React");
          });

          it("Should return smth on mouseMove", () => {
            const testFn = jest.fn();
            const wrap = shallow(<App onMouseMove={testFn} />);
            wrap.find("a").simulate("mouseMove");
            expect(testFn).toHaveBeenCalled();
          });
        });

      </c>`,
      id: uuidv4(),
      tags: "",
      link: ""
    },
    {
      title: 'spyOn',
      text: `<t>Hey buddy I know I'm a bit late here, but you were almost done without any changes besides how you spyOn. <br>
      When you use the spy, you have two options: spyOn the App.prototype, or component component.instance().<br>

      <c>const spy = jest.spyOn(Class.prototype, "method")</c>

      <t>The order of attaching the spy on the class prototype and rendering (shallow rendering) your instance is important.
      <br>
      <c>const spy = jest.spyOn(App.prototype, "myClickFn");
          const instance = shallow(<App />);
      </c>
      <b>The App.prototype<pre> bit on the first line there are what you needed to make things work.
      A javascript  class doesn't have any of its methods until you instantiate it with new MyClass(), or you dip into the MyClass.prototype.
      For your particular question, you just needed to spy on the App.prototype method myClickFn.

      <c>jest.spyOn(component.instance(), "method")

      const component = shallow(<App />);
      const spy = jest.spyOn(component.instance(), "myClickFn");
      This method requires a shallow/render/mount instance of a React.Component to be available. Essentially spyOn is just looking for something to hijack and shove into a jest.fn(). It could be:

      A plain object:

      const obj = {a: x => (true)};
      const spy = jest.spyOn(obj, "a");
      A class:

      class Foo {
          bar() {}
      }

      const nope = jest.spyOn(Foo, "bar");
      // THROWS ERROR. Foo has no "bar" method.
      // Only an instance of Foo has "bar".
      const fooSpy = jest.spyOn(Foo.prototype, "bar");
      // Any call to "bar" will trigger this spy; prototype or instance

      const fooInstance = new Foo();
      const fooInstanceSpy = jest.spyOn(fooInstance, "bar");
      // Any call fooInstance makes to "bar" will trigger this spy.
      Or a React.Component instance:

      const component = shallow(<App />);
      /*
      component.instance()
      -> {myClickFn: f(), render: f(), ...etc}
      */
      const spy = jest.spyOn(component.instance(), "myClickFn");
      Or a React.Component.prototype:

      /*
      App.prototype
      -> {myClickFn: f(), render: f(), ...etc}
      */
      const spy = jest.spyOn(App.prototype, "myClickFn");
      // Any call to "myClickFn" from any instance of App will trigger this spy.
      I've used and seen both methods. When I have a beforeEach() or beforeAll() block, I might go with the first approach. If I just need a quick spy, I'll use the second. Just mind the order of attaching the spy.

      EDIT: If you want to check the side effects of your myClickFn you can just invoke it in a separate test.

      const app = shallow(<App />);
      app.instance().myClickFn()
      /*
      Now assert your function does what it is supposed to do...
      eg.
      expect(app.state("foo")).toEqual("bar");
      */</c>`,
      id: uuidv4(),
      tags: "",
      link: "https://stackoverflow.com/questions/44769404/jest-spyon-function-called"
    }
  ],
  Troubles: [
    {
      title: `[js] types can only be used in a .ts file.`,
      text: `
      <t>Solved it with this steps:
      <br>
      <br>
      <b>install  <t> the extension:<c>   Flow Language Support</c><br>
      <b>disable  <t>the built-in<c>   TypeScript extension:</c>
      <br>
      <t>How to disable built-in TypeScript:
      <br>
      <br>
      <t>go to <b>extensions<t> tab<br>
      <b>search <t>for <c>@builtin TypeScript and JavaScript Language Features</c><br>
      <t>click on <b>Disable`,
      id: uuidv4(),
      tags: "",
      link: "zzzzzzzzzz"
    },
    {
      title: `Setup Flow with Visual Studio Code`,
      text: `When first time using flow, many people use it through terminal. This is fine but there is a better way to implement Flow to your workflow. Many modern text editors and IDEs like Visual Studio Code and Atom offer extension for Flow that runs the Flow checks every time for example a file is saved and displays the errors right at the editor.`,
      id: uuidv4(),
      tags: "",
      link: "https://codepulse.blog/setup-flow-with-visual-studio-code/"
    },
    {
      title: `zzzzzzzzzzz`,
      text: `zzzzzzzzz`,
      id: uuidv4(),
      tags: "",
      link: "zzzzzzzzzz"
    },
    {
      title: `zzzzzzzzzzz`,
      text: `zzzzzzzzz`,
      id: uuidv4(),
      tags: "",
      link: "zzzzzzzzzz"
    },
    {
      title: `zzzzzzzzzzz`,
      text: `zzzzzzzzz`,
      id: uuidv4(),
      tags: "",
      link: "zzzzzzzzzz"
    },
    {
      title: `zzzzzzzzzzz`,
      text: `zzzzzzzzz`,
      id: uuidv4(),
      tags: "",
      link: "zzzzzzzzzz"
    },
    {
      title: `zzzzzzzzzzz`,
      text: `zzzzzzzzz`,
      id: uuidv4(),
      tags: "",
      link: "zzzzzzzzzz"
    },
    {
      title: `zzzzzzzzzzz`,
      text: `zzzzzzzzz`,
      id: uuidv4(),
      tags: "",
      link: "zzzzzzzzzz"
    }
  ],
  Flow: [
    {
      title: `Setup Flow with Visual Studio Code`,
      text: `<t>When first time using flow, many people use it through terminal. This is fine but there is a better way to implement Flow to your workflow. Many modern text editors and IDEs like Visual Studio Code and Atom offer extension for Flow that runs the Flow checks every time for example a file is saved and displays the errors right at the editor.`,
      id: uuidv4(),
      tags: "",
      link: "https://codepulse.blog/setup-flow-with-visual-studio-code/"
    },
    {
      title: `zzzzzzzzzzz`,
      text: `zzzzzzzzz`,
      id: uuidv4(),
      tags: "",
      link: "zzzzzzzzzz"
    }
  ]
};
