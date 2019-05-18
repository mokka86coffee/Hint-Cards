import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import styles from "./Card.scss";
import cx from "classnames";

// export default inject("UsersStore", "MaterialsStore")(observer(Card));

// function Card({ UsersStore, MaterialsStore }) {
//   const { fetchMaterials } = MaterialsStore;
//   const [materialTheme, changeMaterialTheme] = useState("Git");

//   useEffect(() => fetchMaterials(materialTheme), [materialTheme]);

//   console.log(MaterialsStore);

//   const { users } = UsersStore;
//   if (!users.length) {
//     return null;
//   }

//   return users.map(({ username, email, name, id }) => (
//     <div className={styles.cards} key={id}>
//       <h2>{name}</h2>
//       <span>{username}</span>
//       <code>{email}</code>
//     </div>
//   ));
// }

class Card extends React.Component {
  state = {
    materialTheme: "Git",
    chosenCard: null,
    currentPos: {
      x: null,
      y: null
    }
  };

  componentDidMount() {
    this.props.MaterialsStore.fetchMaterials(this.state.materialTheme);
  }

  handleMouseMove = e => {
    console.dir(e.currentTarget);
    console.dir(e.clientX);
    console.dir(e.clientY);
  };

  render() {
    const { getMaterials } = this.props.MaterialsStore;

    if (!getMaterials.length) {
      return null;
    }

    const { chosenCard } = this.state;

    return getMaterials.map(({ title, text, id }, idx) => {
      const style = cx(
        styles.card,
        chosenCard === idx ? styles.card__rotated : null
      );
      return (
        <div className={style} key={id}>
          <h2>{title}</h2>
          {text}
        </div>
      );
    });
  }
}
export default inject("UsersStore", "MaterialsStore")(observer(Card));
