import React from 'react';
import ReactHTMLParser from 'react-html-parser';

const code = `
textArr.map(el => {
            let part;
            if (el.includes("b>")) {
              part = <b key={uuidv4()}>{el.replace(/<?(\/)?b>/g, " ")}</b>;
            } else if (/(c|code)>/.test(el)) {
              part = (
                <code key={uuidv4()}>
                  {htmlentities.decode(el.replace(/<?(\/)?(c|code)>/g, ""))}
                </code>
              );
            } else if (el.includes("br>")) {
              part = <br key={uuidv4()} />;
            } else if (/(t|span|k|f|v|n|y)>/.test(el)) {
              const className = this.computeCommentClassName(el);
              part = (
                <span key={uuidv4()} className={className}>
                  {el.replace(/<?(\/)?(span|t|k|f|v|n|y)>/g, "")}
                </span>
              );
            } else if (el.includes("pre>")) {
              part = <pre key={uuidv4()}>{el.replace(/<?(\/)?pre>/g, "")}</pre>;
            } else {
              part = null;
            }

            return part;
          })
`;

function computeCommentClassName(el) {
    let typeClassName = el.includes("k>") ? styles["comment"] : "";
    typeClassName = el.includes("f>") ? styles["function"] : typeClassName;
    typeClassName = el.includes("v>") ? styles["value"] : typeClassName;
    typeClassName = el.includes("n>") ? styles["name"] : typeClassName;
    typeClassName = el.includes("y>") ? styles["key"] : typeClassName;
    return typeClassName;
}

const operators = ['let', 'const', 'return'];
const operatorsRegExp = new RegExp(`(${operators.join('|')})`,'g');

console.log(operatorsRegExp)

function codeParser (code){
    return code.replace(operatorsRegExp, '<sssss>$1</sssss>');
}


console.log(
    codeParser(code)
)