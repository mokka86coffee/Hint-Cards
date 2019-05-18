import { observable, action, computed, flow, decorate } from "mobx";
import React from "react";
import fetchMaterials from "./MaterialsInfo";
import uuidv4 from "uuid/v4";

class MaterialsStore {
  materials = {};
  currentMaterials = [];
  currentTheme = "Git";

  get getMaterials() {
    return this.currentMaterials;
  }

  get getMaterialsThemes() {
    return Object.keys(this.materials);
  }

  findMaterials(title) {
    this.transformText(title);
    this.currentMaterials = this.materials[title];
  }

  searchInMaterials(word) {
    if (!word) {
      return;
    }

    let materials = this.materials[this.currentTheme];
    this.currentMaterials = materials.filter(el =>
      RegExp(word, "i").test(el.text)
    );
  }

  transformText(title) {
    let text = this.materials[title];
    if (typeof text[0].text !== "string") {
      return;
    }

    const materials = text.map(el => {
      let textArr = el.text.split("|");
      const nodeText = (
        <>
          {textArr.map(el => {
            const part = el.includes("{") ? (
              <b key={uuidv4()}>{el.replace(/[\{\}]/g, " ")}</b>
            ) : el.includes("[") ? (
              <code key={uuidv4()}>{el.replace(/[\[\]]/g, " ")}</code>
            ) : (
              <span key={uuidv4()}>{el}</span>
            );
            return part;
          })}
        </>
      );
      return { ...el, nodeText };
    });
    this.materials[title] = materials;
  }

  fetchMaterials = flow(function*(title) {
    this.materials = yield fetchMaterials();
    if (title) {
      this.findMaterials(title);
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
  transformText: action
});

export default new store();
