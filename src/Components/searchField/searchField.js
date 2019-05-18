import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import styles from "./searchField.scss";
import cx from "classnames";

class searchField extends React.Component {
  searchInMaterials = e => {
    e.preventDefault();
    this.props.MaterialsStore.searchInMaterials(this.ref.value);
    this.ref.value = "";
  };
  render() {
    // const { searchInMaterials } = this.props.MaterialsStore.searchInMaterials;

    return (
      <form onSubmit={this.searchInMaterials} className={styles.searchField}>
        <input ref={n => (this.ref = n)} />
      </form>
    );
  }
}
export default inject("MaterialsStore")(observer(searchField));
