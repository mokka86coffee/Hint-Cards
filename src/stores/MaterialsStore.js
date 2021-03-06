import { observable, action, computed, flow, decorate } from "mobx";
import React from "react";
import fetchMaterials from "./MaterialsInfo";
import uuidv4 from "uuid/v4";
import htmlentities from "./htmlEntities";
import styles from "../Components/Cards/Card.scss";

class MaterialsStore {
  materials = {};
  currentMaterials = [];
  currentTheme = "Jest, Enzyme";

  get getMaterials() {
    return this.currentMaterials;
  }

  get getMaterialsThemes() {
    return Object.keys(this.materials);
  }

  findMaterials(theme) {
    this.transformText(theme);
    this.currentTheme = theme;
    this.currentMaterials = this.materials[theme];
  }

  searchInMaterials(word) {
    if (!word) {
      this.currentMaterials = this.materials[this.currentTheme];
      return;
    }

    let materials = this.materials[this.currentTheme];
    this.currentMaterials = materials.filter(
      el =>
        RegExp(word, "i").test(el.text) ||
        RegExp(word, "i").test(el.title) ||
        RegExp(word, "i").test(el.tags)
    );
  }

  computeCommentClassName(el) {
    let typeClassName = el.includes("k>") ? styles["comment"] : "";
    typeClassName = el.includes("f>") ? styles["function"] : typeClassName;
    typeClassName = el.includes("v>") ? styles["value"] : typeClassName;
    typeClassName = el.includes("n>") ? styles["name"] : typeClassName;
    typeClassName = el.includes("y>") ? styles["key"] : typeClassName;
    return typeClassName;
  }

  transformText(theme) {
    let text = this.materials[theme];

    if (text[0].nodeText) {
      return;
    }

    const materials = text.map(el => {
      let codeArr = el.text.split("<c>").map(el => {
        let endPos = el.indexOf("</c>");
        if (~endPos) {
          let str = el.slice(endPos + 4);
          let code = el.slice(0, endPos);
          code = htmlentities.encode(code);
          el = `<c>${code}</c>${str}`;
        }
        return el;
      });

      el.text = codeArr.join("");

      let textArr = el.text.split("<");
      const nodeText = (
        <>
          {textArr.map(el => {
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
            } else if (el.includes("pre>")) {
              part = <pre key={uuidv4()}>{el.replace(/<?(\/)?pre>/g, "")}</pre>;
            } else if (/(t|span|k|f|v|n|y)>/.test(el)) {
              const className = this.computeCommentClassName(el);
              part = (
                <span key={uuidv4()} className={className}>
                  {el.replace(/<?(\/)?(span|t|k|f|v|n|y)>/g, "")}
                </span>
              );
            } else {
              part = null;
            }

            return part;
          })}
        </>
      );
      return { ...el, nodeText };
    });
    this.materials[theme] = materials;
  }

  getFromLocalStorage() {
    const data = localStorage.getItem("shortcodes");
    this.materials = JSON.parse(data);
    this.currentTheme = Object.keys(this.materials)[0];
    this.findMaterials(this.currentTheme);
  }

  fetchMaterials = flow(function*() {
    if (localStorage.getItem("shortcodes")) {
      this.getFromLocalStorage();
    } else {
      this.materials = yield fetchMaterials();
      this.findMaterials(this.currentTheme);
    }
  });
}

const store = decorate(MaterialsStore, {
  materials: observable,
  currentMaterials: observable,
  currentTheme: observable,
  getMaterials: computed,
  getMaterialsThemes: computed,
  findMaterials: action,
  searchInMaterials: action,
  transformText: action,
  getFromLocalStorage: action
});

export default new store();
