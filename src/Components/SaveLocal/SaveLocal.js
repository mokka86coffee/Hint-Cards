import React from "react";
import { inject, observer } from "mobx-react";
import styles from "./SaveLocal.scss";
import cx from "classnames";

class SaveLocal extends React.Component {
  state = {
    isOpened: true
  };

  showForm = e => this.setState({ isOpened: !this.state.isOpened });

  saveLocal = e => {
    e.preventDefault();
    const data = this.ref.value.replace(/([\n])([\s]{2,})/g, "");
    localStorage.setItem("shortcodes", JSON.stringify(data));
    console.log(
      "in SaveLocal - ",
      JSON.parse(localStorage.getItem("shortcodes"))
    );
    this.props.MaterialsStore.getFromLocalStorage();
    this.setState({ isOpened: false });
  };

  render() {
    const { getMaterialsThemes } = this.props.MaterialsStore;
    const { isOpened } = this.state;

    if (!getMaterialsThemes.length) {
      return null;
    }

    const saveLocalClassName = cx(
      styles.saveLocal,
      isOpened ? styles["saveLocal--opened"] : null
    );

    return (
      <div className={saveLocalClassName}>
        <button type="button" onClick={this.showForm} />
        <form onSubmit={this.saveLocal} className={styles.saveLocal__wrap}>
          <textarea ref={n => (this.ref = n)} />
          <button type="submit">Сохранить</button>
        </form>
      </div>
    );
  }
}
export default inject("MaterialsStore")(observer(SaveLocal));
