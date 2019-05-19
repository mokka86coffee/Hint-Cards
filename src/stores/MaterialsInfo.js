import uuidv4 from "uuid/v4";

export default function fetchMaterials(name) {
  if (name) {
    return new Promise(r => setTimeout(() => r(Materials[name]), 0));
  }

  return new Promise(r => setTimeout(() => r(Materials), 0));
}

var Materials = {
  Git: [
    {
      title: `Как использовать данный сайт`,
      text: `Сайт создавался с целью | <b> быстрого закрепления найденной информации, для дальнейшего использования,</b>| 
            без повторного поиска в интернете|<br><br>|
            * Кликаем на карточку 2 раза, для раскрытия|<br><br>|
            Для использования своей информации нажимаем на дискету внизу и вставляем свой текст по|<b> шаблону:</b>|<br><br>|
            Шаблон находится в |<b>репозитории</b>| (клик на красную кнопку | <b>link</b>| внизу карточки)
      `,
      id: uuidv4(),
      link: "https://github.com/mokka86coffee/Hint-Cards"
    },
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `<b>1) Первый способ задать url репозитория:</b>|<br><br>|
      использовать команду| <code>git remote set-url origin</code>|, например:|<br>|
      
      <code>git remote set-url origin git@github.com:vicman-wi/wi-backend.git</code>|<br><br>|
      
      <b>2) Второй способ:</b>|<br>|
      
      Отредактировать файл |<code>.git/config</code> | : секция |<b>remote "origin"</b>| ,  параметр - |<b>url</b>|. `,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как удалить директорию локально и из удаленного репо?`,
      text: `<code>git rm -r one-of-the-directories</code>|<br>|
      <code>git commit -m "Remove duplicated directory"</code>|<br>|
      <code>git push origin <your-git-branch></code> | typically | <b>'master'</b>|, but not always`,
      id: uuidv4(),
      link:
        "https://stackoverflow.com/questions/6313126/how-to-remove-a-directory-from-git-repository"
    }
  ],
  "React hooks": [
    {
      title: `Как удалить директорию локально и из удаленного репо?`,
      text: `<code>git rm -r one-of-the-directories</code>|<br>|
      <code>git commit -m "Remove duplicated directory"</code>|<br>|
      <code>git push origin <your-git-branch></code> | typically | <b>'master'</b>|, but not always`,
      id: uuidv4(),
      link:
        "https://stackoverflow.com/questions/6313126/how-to-remove-a-directory-from-git-repository"
    }
  ],
  "React Mobx": [
    {
      title: `Как удалить директорию локально и из удаленного репо?`,
      text: `<code>git rm -r one-of-the-directories</code>|<br>|
      <code>git commit -m "Remove duplicated directory"</code>|<br>|
      <code>git push origin <your-git-branch></code> | typically | <b>'master'</b>|, but not always`,
      id: uuidv4(),
      link:
        "https://stackoverflow.com/questions/6313126/how-to-remove-a-directory-from-git-repository"
    }
  ],
  Lodash: [
    {
      title: `Как удалить директорию локально и из удаленного репо?`,
      text: `<code>git rm -r one-of-the-directories</code>|<br>|
      <code>git commit -m "Remove duplicated directory"</code>|<br>|
      <code>git push origin <your-git-branch></code> | typically | <b>'master'</b>|, but not always`,
      id: uuidv4(),
      link:
        "https://stackoverflow.com/questions/6313126/how-to-remove-a-directory-from-git-repository"
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
