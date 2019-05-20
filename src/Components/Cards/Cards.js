import React from "react";
import { inject, observer } from "mobx-react";
import styles from "./Card.scss";
import cx from "classnames";
import _ from "lodash";
import { debounce, throttle } from "lodash";

console.log(_.zip([1, 2, 3], [4, 5, 6], ["a", "b", "c"]));

class Card extends React.Component {
  state = {
    chosenCard: null,
    hoveredCard: null,
    theme: this.props.MaterialsStore.currentTheme
  };

  componentDidMount() {
    this.props.MaterialsStore.fetchMaterials();
  }

  static getDerivedStateFromProps({ MaterialsStore }, { theme }) {
    if (MaterialsStore && MaterialsStore.currentTheme !== theme) {
      return {
        theme: MaterialsStore.currentTheme,
        hoveredCard: null,
        chosenCard: null
      };
    } else {
      return null;
    }
  }

  render() {
    const { getMaterials } = this.props.MaterialsStore;

    if (!getMaterials.length) {
      return null;
    }

    const { chosenCard, hoveredCard } = this.state;

    return getMaterials.map(({ title, nodeText, id, link }, idx) => {
      const className = cx(
        styles.card,
        chosenCard === idx ? styles.card__rotated : null,
        hoveredCard === idx ? styles.card__hovered : null
      );

      return (
        <div
          className={className}
          key={id}
          data-id={idx}
          onDoubleClick={this.handleDblClick}
          onMouseEnter={() => this.handleHover(idx)}
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

  handleHover = debounce(idx => {
    const { hoveredCard } = this.state;

    if (idx !== hoveredCard) {
      this.setState({ hoveredCard: +idx });
    }
  }, 300);
}
export default inject("MaterialsStore")(observer(Card));
