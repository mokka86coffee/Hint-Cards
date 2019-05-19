import React from "react";
import { inject, observer } from "mobx-react";
import styles from "./SaveLocal.scss";
import cx from "classnames";

class SaveLocal extends React.Component {
  state = {
    isOpened: false
  };

  showForm = e => this.setState({ isOpened: !this.state.isOpened });

  saveLocal = e => {
    e.preventDefault();
    localStorage.setItem("shortcodes", this.ref.value);
    this.props.MaterialsStore.getFromLocalStorage();
    this.setState({ isOpened: false });
    this.ref.value = "";
  };

  render() {
    const { getMaterialsThemes } = this.props.MaterialsStore;
    const { isOpened } = this.state;

    if (!getMaterialsThemes.length) {
      return null;
    }

    const saveLocalClassName = cx(
      styles.saveLocal,
      isOpened ? styles["saveLocal--opened"] : null
    );

    return (
      <div className={saveLocalClassName}>
        <button type="button" onClick={this.showForm} />
        <form onSubmit={this.saveLocal} className={styles.saveLocal__wrap}>
          <textarea placeholder={placeholder} ref={n => (this.ref = n)} />
          <button type="submit">Сохранить</button>
        </form>
      </div>
    );
  }
}
export default inject("MaterialsStore")(observer(SaveLocal));

var placeholder = `{
  &quot;Mine&quot;: [
    {
      &quot;title&quot;: &quot;Название поста&quot;,
      &quot;text&quot;: &quot;&lt;b&gt;Жирный текст&lt;/b&gt;&lt;c&gt;ваш код&lt;/c&gt;&lt;t&gt;обычный текст&lt;/t&gt;&lt;br&gt;&lt;t&gt;со следующей&lt;/t&gt; &lt;b&gt;строки&lt;/b&gt;&quot;,
      &quot;id&quot;: &quot;unique_id&quot;,
      &quot;link&quot;: &quot;https://google.com&quot;
    }
  ]
}
`;
