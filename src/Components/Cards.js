import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import styles from "./Card.scss";

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
    materialTheme: "Git"
  };

  componentDidMount() {
    this.props.MaterialsStore.fetchMaterials(this.state.materialTheme);
  }

  render() {
    const { users } = this.props.UsersStore;
    const { getMaterials } = this.props.MaterialsStore;
    if (!users.length) {
      return null;
    }
    console.log(getMaterials);
    return getMaterials.map(({ username, email, name, id }) => (
      <div className={styles.card} key={id}>
        <p className={styles.t}>{name}</p>
        <span className={styles.c}>{username}</span>
        <span className={styles.i}>{email}</span>
      </div>
    ));
  }
}
export default inject("UsersStore", "MaterialsStore")(observer(Card));
