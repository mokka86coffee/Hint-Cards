import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { inject } from "../../stores/StoresContext";
import styles from "./AsideList.scss";
import cx from "classnames";

class AsideList extends React.Component {
  // тему берём из данных, а не из innerText: с text-transform: uppercase innerText приходит заглавными
  onClick = theme => () => {
    this.props.MaterialsStore.findMaterials(theme);
  };

  render() {
    const { getMaterialsThemes } = this.props.MaterialsStore;

    if (!getMaterialsThemes.length) {
      return null;
    }

    const { currentTheme } = this.props.MaterialsStore;

    return (
      <div className={styles.asideList}>
        <div className={styles.asideList__wrap}>
          {getMaterialsThemes.map((theme, idx) => {
            const style = currentTheme == theme ? styles.chosen : null;
            return (
              <h2 className={style} onClick={this.onClick(theme)} key={idx}>
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
