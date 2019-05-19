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
      <c>git push origin <your-git-branch>   </c><t>Обычно</t><b>'master'</b><t>, но не всегда</t><br><br>
      <b>Удаление только из удаленного репоз-я</b><br><br>
      <c>git rm -r --cached FolderName   </c><t>Удаляем директорию локально</t><br>
      <c>git commit -m "Folder removed"   </c><t>Коммитим</t><br>
      <c>git push origin <your-git-branch>   </c><t>Обычно</t><b>'master'</b><t>, но не всегда</t><br><br>`,
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
    }
  ],
  "React hooks": [
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
      <c>   console.log(elem) // 1, 2</c><br>
      <c>   console.log(idx) // 0, 1</c><br>
      <c>})</c><br>
      <t>Возвращает переданный</t><b> массив</b>
      <br><br>
      <b>Работа с объектами</b><br><br>
      <c>_.each({a: 1, b: 'string'}, function(elem,key){</c><br>
        <c>   console.log(elem) // 1, 'string'</c><br>
        <c>   console.log(key) // 'a', 'b'</c><br>
      <c>})</c><br>
      <t>Возвращает переданный</t><b> объект</b>
      `,
      id: uuidv4(),
      tags: "",
      link: "https://lodash.com/docs#forEach"
    },
    {
      title: `Метод zip`,
      text: `
      <b>Работа с массивами</b><br><br>
      <c>_.each([1,2], function(elem,idx){</c><br>
      <c>   console.log(elem) // 1, 2</c><br>
      <c>   console.log(idx) // 0, 1</c><br>
      <c>})</c><br>
      <t>Возвращает переданный</t><b> массив</b>
      <br><br>
      <b>Работа с объектами</b><br><br>
      <c>_.each({a: 1, b: 'string'}, function(elem,key){</c><br>
        <c>   console.log(elem) // 1, 'string'</c><br>
        <c>   console.log(key) // 'a', 'b'</c><br>
      <c>})</c><br>
      <t>Возвращает переданный</t><b> объект</b>
      `,
      id: uuidv4(),
      tags: "",
      link: "#"
    }
  ],
  zzzzzz: [
    {
      title: `zzzzzzzzzzz`,
      text: `zzzzzzzzz`,
      id: uuidv4(),
      tags: "",
      link: "zzzzzzzzzz"
    }
  ],
  zzzzzz2: [
    {
      title: `zzzzzzzzzzz`,
      text: `zzzzzzzzz`,
      id: uuidv4(),
      tags: "",
      link: "zzzzzzzzzz"
    }
  ],
  zzzzzz3: [
    {
      title: `zzzzzzzzzzz`,
      text: `zzzzzzzzz`,
      id: uuidv4(),
      tags: "",
      link: "zzzzzzzzzz"
    }
  ],
  zzzzzz4: [
    {
      title: `zzzzzzzzzzz`,
      text: `zzzzzzzzz`,
      id: uuidv4(),
      tags: "",
      link: "zzzzzzzzzz"
    }
  ]
};
