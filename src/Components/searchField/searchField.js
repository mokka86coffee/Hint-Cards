import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import styles from "./searchField.scss";
import cx from "classnames";
import { debounce } from "lodash";

class searchField extends React.Component {
  state = { theme: this.props.MaterialsStore.currentTheme };

  searchInMaterials = e => {
    e.preventDefault();
    this.props.MaterialsStore.searchInMaterials(e.target[0].value);
  };

  debounceEvent(...args) {
    this.debouncedEvent = debounce(...args);
    return e => {
      e.persist();
      return this.debouncedEvent(e);
    };
  }

  handleSearchInput = ({ target }) => {
    this.props.MaterialsStore.searchInMaterials(target.value);
  };

  render() {
    return (
      <form onSubmit={this.searchInMaterials} className={styles.searchField}>
        <input
          onInput={this.debounceEvent(this.handleSearchInput, 300)}
          onBlur={e => (this.ref.value = "")}
        />
      </form>
    );
  }
}
export default inject("MaterialsStore")(observer(searchField));
