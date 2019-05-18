import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import styles from "./App.scss";

import Cards from "./Components/Cards/Cards";

class App extends Component {
  componentDidMount() {
    this.props.UsersStore.fetchUsers();
  }

  render() {
    const { birds } = this.props.BirdsStore;

    return (
      <div className={styles.app}>
        <div className={styles.card__wrap}>
          <Cards />
        </div>
      </div>
    );
  }
}

// @inject('appUsersStore')
// @observer
export default inject("UsersStore", "BirdsStore")(observer(App));
