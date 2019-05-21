import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import styles from "./App.scss";

import Cards from "./Components/Cards/Cards";
import AsideList from "./Components/AsideList/AsideList";
import SearchField from "./Components/searchField/searchField";
import SearchFieldThrottle from "./Components/searchField/searchField_throttle";
import SaveLocal from "./Components/SaveLocal/SaveLocal";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <SearchFieldThrottle />
        <AsideList />
        <Cards />
        <SaveLocal />
      </div>
    );
  }
}

export default App;
