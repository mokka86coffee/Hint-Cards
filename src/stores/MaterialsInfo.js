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
      text: `{Второй способ задать url репозитория:}|<br>|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]{Первый способ задать url репозитория: }| использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
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
  ],
  "React lifecycles lifecycles lifecycles": [
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `{Первый способ задать url репозитория:}|использовать команду|[git remote set-url origin]|, например:|[git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    }
  ]
};
