import { observable, action, computed, flow, decorate } from "mobx";
import React from "react";
import fetchMaterials from "./MaterialsInfo";

class MaterialsStore {
  materials = {};
  currentMaterials = [];

  get getMaterials() {
    return this.currentMaterials;
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
            return <p>1</p>;
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
  findMaterials: action,
  transformText: action
});

export default new store();
