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
