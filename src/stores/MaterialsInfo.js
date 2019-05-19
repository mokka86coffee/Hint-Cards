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
      text: `<span>Сайт создавался с целью</span> <b> быстрого закрепления найденной информации, для дальнейшего использования,</b> 
            <span>без повторного поиска в интернете</span><br><br>
            <span>* Кликаем на карточку 2 раза, для раскрытия</span><br><br>
            <span>Для поиска - вводим часть фразы и 'enter'</span><br>
            <span>Для использования своей информации нажимаем на дискету внизу и вставляем свой текст по</span><b> шаблону:</b><br><br>
            <span>Шаблон находится в </span><b>репозитории</b><span> (клик на красную кнопку  </span><b>link</b><span> внизу карточки)</span>
      `,
      id: uuidv4(),
      link: "https://github.com/mokka86coffee/Hint-Cards"
    }
  ],
  Git: [
    {
      title: `Как изменить адрес origin репозитория в git?`,
      text: `<b>1) Первый способ задать url репозитория:</b><br>
      <t>использовать команду: </t><code>git remote set-url origin</code><pre>, например:   </pre><br>
      
      <code>git remote set-url origin git@github.com:vicman-wi/wi-backend.git</code><br><br>
      
      <b>2) Второй способ:</b><br><t>
      
      Отредактировать файл </t><code>.git/config</code><t>  : секция </t><b>remote "origin"</b><t>,  параметр - </t><b>url</b>. `,
      id: uuidv4(),
      link: "https://jeka.by/ask/137/git-change-origin/"
    },
    {
      title: `Как удалить директорию локально и из удаленного репо?`,
      text: `<c>git rm -r one-of-the-directories</c><br>
      <c>git commit -m "Remove duplicated directory"</c><br>
      <c>git push origin <your-git-branch></c><pre>  typically </pre><b>'master'</b><t>, but not always</t>`,
      id: uuidv4(),
      link:
        "https://stackoverflow.com/questions/6313126/how-to-remove-a-directory-from-git-repository"
    }
  ],
  "React hooks": [
    {
      title: `Как удалить директорию локально и из удаленного репо?`,
      text: `<code>git rm -r one-of-the-directories</code><br>
      <code>git commit -m "Remove duplicated directory"</code><br>
      <code>git push origin <your-git-branch></code>  typically  <b>'master'</b>, but not always`,
      id: uuidv4(),
      link:
        "https://stackoverflow.com/questions/6313126/how-to-remove-a-directory-from-git-repository"
    }
  ],
  "React Mobx": [
    {
      title: `Как удалить директорию локально и из удаленного репо?`,
      text: `<code>git rm -r one-of-the-directories</code><br>
      <code>git commit -m "Remove duplicated directory"</code><br>
      <code>git push origin <your-git-branch></code>  typically  <b>'master'</b>, but not always`,
      id: uuidv4(),
      link:
        "https://stackoverflow.com/questions/6313126/how-to-remove-a-directory-from-git-repository"
    }
  ],
  Lodash: [
    {
      title: `Как удалить директорию локально и из удаленного репо?`,
      text: `<code>git rm -r one-of-the-directories</code><br>
      <code>git commit -m "Remove duplicated directory"</code><br>
      <code>git push origin <your-git-branch></code>  typically  <b>'master'</b>, but not always`,
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
