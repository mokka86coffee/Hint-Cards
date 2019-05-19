import { observable, action, computed, flow, decorate } from "mobx";
import React from "react";
import fetchMaterials from "./MaterialsInfo";
import uuidv4 from "uuid/v4";

class MaterialsStore {
  materials = {};
  currentMaterials = [];
  currentTheme = "About";

  get getMaterials() {
    return this.currentMaterials;
  }

  get getMaterialsThemes() {
    return Object.keys(this.materials);
  }

  findMaterials(title) {
    this.transformText(title);
    this.currentTheme = title;
    this.currentMaterials = this.materials[title];
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

  transformText(title) {
    let text = this.materials[title];
    if (typeof text[0].text !== "string") {
      return;
    }

    const materials = text.map(el => {
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
                  {el.replace(/<?(\/)?(c|code)>/g, " ")}
                </code>
              );
            } else if (el.includes("br>")) {
              part = <br key={uuidv4()} />;
            } else if (/(t|span)>/.test(el)) {
              part = (
                <span key={uuidv4()}>
                  {el.replace(/<?(\/)?(span|t)>/g, " ")}
                </span>
              );
            } else if (el.includes("pre>")) {
              part = <pre key={uuidv4()}>{el.replace(/<?(\/)?pre>/g, "")}</pre>;
            } else {
              part = null;
            }

            return part;
          })}
        </>
      );
      return { ...el, nodeText };
    });
    this.materials[title] = materials;
  }

  getFromLocalStorage() {
    const data = localStorage.getItem("shortcodes");
    this.materials = JSON.parse(data);
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
