import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import styles from "./App.scss";

import Cards from "./Components/Cards/Cards";
import AsideList from "./Components/AsideList/AsideList";
import SearchField from "./Components/searchField/searchField";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <SearchField />
        <AsideList />
        <div className={styles.card__wrap}>
          <Cards />
        </div>
      </div>
    );
  }
}

export default App;
