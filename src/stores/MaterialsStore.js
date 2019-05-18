import { observable, action, computed, flow, decorate } from "mobx";
import React from "react";
import fetchMaterials from "./MaterialsInfo";
import uuidv4 from "uuid/v4";

class MaterialsStore {
  materials = {};
  currentMaterials = [];

  get getMaterials() {
    return this.currentMaterials;
  }

  get getMaterialsThemes() {
    return Object.keys(this.materials);
  }

  findMaterials(title) {
    this.currentMaterials = this.materials[title];
  }

  transformText(title) {
    let text = this.materials[title];

    const materials = text.map(el => {
      let textArr = el.text.split("|");
      console.log("TCL: MaterialsStore -> transformText -> textArr", textArr);
      const text = (
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
      return { ...el, text };
    });
    this.materials[title] = materials;
    this.findMaterials(title);
  }

  fetchMaterials = flow(function*(title) {
    this.materials = yield fetchMaterials();
    if (title) {
      this.transformText(title);
    }
  });
}

const store = decorate(MaterialsStore, {
  materials: observable,
  currentMaterials: observable,
  getMaterials: computed,
  getMaterialsThemes: computed,
  findMaterials: action,
  transformText: action
});

export default new store();
