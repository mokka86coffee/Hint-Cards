import React from "react";
import { inject, observer } from "mobx-react";
import styles from "./Card.scss";

export default inject("UsersStore")(observer(Card));

function Card({ UsersStore }) {
  const { users } = UsersStore;

  if (!users.length) {
    return null;
  }

  return users.map(({ username, email, name, id }) => (
    <div className={styles.cards} key={id}>
      <h2>{name}</h2>
      <span>{username}</span>
      <code>{email}</code>
    </div>
  ));
}

{
  // class Card extends React.Component {
  //   render() {
  //     const { users } = this.props.UsersStore;
  //     if (!users.length) {
  //       return null;
  //     }
  //     return users.map(({ username, email, name, id }) => (
  //       <div className={styles.card} key={id}>
  //         <p className={styles.t}>{name}</p>
  //         <span className={styles.c}>{username}</span>
  //         <span className={styles.i}>{email}</span>
  //       </div>
  //     ));
  //   }
  // }
  // export default inject("UsersStore", "BirdsStore")(observer(Card));
} // Class version
