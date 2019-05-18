import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import styles from "./AsideList.scss";
import cx from "classnames";

class AsideList extends React.Component {
  state = {
    materialTheme: "Git"
  };

  onClick = ({ target: { innerText } }) => {
    this.props.MaterialsStore.findMaterials(innerText);
  };

  render() {
    const { getMaterialsThemes } = this.props.MaterialsStore;

    if (!getMaterialsThemes.length) {
      return null;
    }

    const { materialTheme } = this.state;

    return (
      <div className={styles.asideList}>
        {getMaterialsThemes.map((theme, idx) => {
          const style = cx();
          return (
            <h2 onClick={this.onClick} key={idx}>
              {theme}
            </h2>
          );
        })}
      </div>
    );
  }
}
export default inject("MaterialsStore")(observer(AsideList));
