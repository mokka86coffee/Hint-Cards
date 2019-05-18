import React from "react";
import { inject, observer } from "mobx-react";
import styles from "./Card.scss";

class Card extends React.Component {
  render() {
    const { users } = this.props.UsersStore;

    if (!users.length) {
      return null;
    }

    return users.map(({ username, email, name, id }) => (
      <div className={styles.card} key={id}>
        <p>{name}</p>
        <span>{username}</span>
        <h4>{email}</h4>
      </div>
    ));
  }
}
export default inject("UsersStore", "BirdsStore")(observer(Card));

// function Card(props) {
//   console.log(props);
//   const { username, company, email, id } = props.UsersStore.getUserInfo;
//   return (
//     <div className={styles.card} key={id}>
//       <h2>{username}</h2>
//       <h3>{email}</h3>
//       <h4>{company}</h4>
//     </div>
//   );
// }

// export default inject("UsersStore")(observer(Card));
