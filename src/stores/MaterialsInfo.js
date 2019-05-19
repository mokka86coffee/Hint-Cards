import uuidv4 from "uuid/v4";

export default function fetchMaterials(name) {
  if (name) {
    return new Promise(r =>
      setTimeout(() => r(Materials[name]), Math.random() * 100)
    );
  }

  return new Promise(r => setTimeout(() => r(Materials), Math.random() * 100));
}

var Materials = {
  Git: [
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{1) Первый способ задать url репозитория:}|<br><br>|
      использовать команду| [git remote set-url origin]|, например:|<br>|
      
      [git remote set-url origin git@github.com:vicman-wi/wi-backend.git]|<br><br>|
      
      {2) Второй способ:}|<br>|
      
      Отредактировать файл |[.git/config] | : секция |{remote "origin"}| ,  параметр - |{url}|. `,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как удалить директорию локально и из удаленного репо?`,
      text: `[git rm -r one-of-the-directories]|<br>|
      [git commit -m "Remove duplicated directory"]|<br>|
      [git push origin <your-git-branch>] | typically | {'master'}|, but not always`,
      id: uuidv4(),
      link:
        "https://stackoverflow.com/questions/6313126/how-to-remove-a-directory-from-git-repository"
    }
  ],
  "React hooks": [
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    }
  ],
  "React lifecycles lifecycles lifecycles": [
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    }
  ],
  "React Mobx": [
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    }
  ],
  Lodash: [
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    }
  ],
  zzzzzz: [
    {
      title: `zzzzzzzzzzz`,
      text: `zzzzzzzzz`,
      id: uuidv4(),
      link: "zzzzzzzzzz"
    }
  ],
  zzzzzz2: [
    {
      title: `zzzzzzzzzzz`,
      text: `zzzzzzzzz`,
      id: uuidv4(),
      link: "zzzzzzzzzz"
    }
  ],
  zzzzzz3: [
    {
      title: `zzzzzzzzzzz`,
      text: `zzzzzzzzz`,
      id: uuidv4(),
      link: "zzzzzzzzzz"
    }
  ],
  zzzzzz4: [
    {
      title: `zzzzzzzzzzz`,
      text: `zzzzzzzzz`,
      id: uuidv4(),
      link: "zzzzzzzzzz"
    }
  ]
};
