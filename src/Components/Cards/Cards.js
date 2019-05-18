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
    materialTheme: this.props.MaterialsStore.currentTheme,
    chosenCard: null
  };

  componentDidMount() {
    this.props.MaterialsStore.fetchMaterials(this.state.materialTheme);
  }

  handleMouseMove = e => {
    console.dir(e.currentTarget);
    console.dir(e.clientX);
    console.dir(e.clientY);
  };

  handleDblClick = ({ currentTarget }) => {
    const { chosenCard: prev } = this.state;
    const next = +currentTarget.dataset.id;
    // Получаем выбранную карточку и текущую

    const posX = currentTarget.offsetLeft;
    // Получаем позицию выбранной карточки по оси x

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

    return getMaterials.map(({ title, nodeText, id, link }, idx) => {
      const className = cx(
        styles.card,
        chosenCard === idx ? styles.card__rotated : null
      );

      return (
        <div
          className={className}
          key={id}
          data-id={idx}
          onDoubleClick={this.handleDblClick}
        >
          <button onClick={this.closeCard}>x</button>
          <h2>{title}</h2>
          <div className={styles.wrap__nodeText}>{nodeText}</div>
          <a target="_blank" href={link}>
            LINK
          </a>
        </div>
      );
    });
  }
}
export default inject("UsersStore", "MaterialsStore")(observer(Card));
