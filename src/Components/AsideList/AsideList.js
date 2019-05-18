import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import styles from "./AsideList.scss";
import cx from "classnames";

class AsideList extends React.Component {
  state = {
    currentTheme: "Git"
  };

  onClick = ({ target: { innerText } }) => {
    this.props.MaterialsStore.findMaterials(innerText);
    this.setState({ currentTheme: innerText });
  };

  render() {
    const { getMaterialsThemes } = this.props.MaterialsStore;

    if (!getMaterialsThemes.length) {
      return null;
    }

    const { currentTheme } = this.state;

    return (
      <div className={styles.asideList}>
        <div className={styles.asideList__wrap}>
          {getMaterialsThemes.map((theme, idx) => {
            const style = currentTheme == theme ? styles.chosen : null;
            return (
              <h2 className={style} onClick={this.onClick} key={idx}>
                {theme}
              </h2>
            );
          })}
        </div>
      </div>
    );
  }
}
export default inject("MaterialsStore")(observer(AsideList));
