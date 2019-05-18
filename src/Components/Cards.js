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
    const { getMaterials } = this.props.MaterialsStore;

    if (!getMaterials.length) {
      return null;
    }

    return getMaterials.map(({ title, text, id }) => {
      return (
        <div className={styles.cards} key={id}>
          <h2>{title}</h2>
          <span>{text}</span>
        </div>
      );
    });
  }
}
export default inject("UsersStore", "MaterialsStore")(observer(Card));
