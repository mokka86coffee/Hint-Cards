import { observable, action, computed, flow, decorate } from "mobx";
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
  getMaterials: computed,
  findMaterials: action
});

export default new store();
