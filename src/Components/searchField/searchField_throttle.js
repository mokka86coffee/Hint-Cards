import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import styles from "./searchField.scss";
import cx from "classnames";
import { throttle } from "lodash";

class searchField extends React.Component {
  state = { theme: this.props.MaterialsStore.currentTheme };

  searchInMaterials = e => {
    e.preventDefault();
    this.props.MaterialsStore.searchInMaterials(e.target[0].value);
  };

  throttleEvent(...args) {
    const throttledEvent = throttle(...args);
    return e => {
      e.persist();
      return throttledEvent(e);
    };
  }

  handleSearchInput = ({ target }) => {
    this.props.MaterialsStore.searchInMaterials(target.value);
  };

  render() {
    return (
      <form onSubmit={this.searchInMaterials} className={styles.searchField}>
        <input
          onInput={this.throttleEvent(this.handleSearchInput, 300)}
          onBlur={e => (e.target.value = "")}
        />
      </form>
    );
  }
}
export default inject("MaterialsStore")(observer(searchField));
