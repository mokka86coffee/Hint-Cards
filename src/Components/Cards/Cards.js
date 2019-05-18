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

  handleDblClick = ({ currentTarget: { dataset } }) => {
    const { chosenCard: prev } = this.state;
    const next = +dataset.id;

    if (!prev || prev !== next) {
      this.setState({ chosenCard: next });
    }
  };

  closeCard = e => this.setState({ chosenCard: null });

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
        <div
          className={style}
          key={id}
          data-id={idx}
          onDoubleClick={this.handleDblClick}
        >
          <h2 onClick={this.closeCard}>{title}</h2>
          {text}
        </div>
      );
    });
  }
}
export default inject("UsersStore", "MaterialsStore")(observer(Card));
