import uuidv4 from "uuid/v4";
const Materials = {
  Git: [
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Отменить 'add .'`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    }
  ],
  "React hooks": [
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    }
  ]
};

export default function fetchMaterials(name) {
  if (name) {
    return new Promise(r => setTimeout(() => r(Materials[name]), 200));
  }

  return new Promise(r => setTimeout(() => r(Materials), 200));
}
