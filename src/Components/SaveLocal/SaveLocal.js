import React from "react";
import { inject, observer } from "mobx-react";
import styles from "./SaveLocal.scss";
import cx from "classnames";

class SaveLocal extends React.Component {
  state = {
    isOpened: false
  };

  showForm = e => this.setState({ isOpened: !this.state.isOpened });

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
        <form className={styles.saveLocal__wrap}>
          <textarea />
          <button type="submit">Сохранить</button>
        </form>
      </div>
    );
  }
}
export default inject("MaterialsStore")(observer(SaveLocal));
