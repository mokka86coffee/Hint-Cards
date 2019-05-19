import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import styles from "./App.scss";

import Cards from "./Components/Cards/Cards";
import AsideList from "./Components/AsideList/AsideList";
import SearchField from "./Components/searchField/searchField";
import SaveLocal from "./Components/SaveLocal/SaveLocal";

class App extends Component {
  componentDidMount() {
    (function(window) {
      window.htmlentities = {
        /**
         * Converts a string to its html characters completely.
         *
         * @param {String} str String with unescaped HTML characters
         **/
        encode: function(str) {
          var buf = [];

          for (var i = str.length - 1; i >= 0; i--) {
            buf.unshift(["&#", str[i].charCodeAt(), ";"].join(""));
          }

          return buf.join("");
        },
        /**
         * Converts an html characterSet into its original character.
         *
         * @param {String} str htmlSet entities
         **/
        decode: function(str) {
          return str.replace(/&#(\d+);/g, function(match, dec) {
            return String.fromCharCode(dec);
          });
        }
      };
    })(window);
  }
  render() {
    return (
      <div className={styles.app}>
        <SearchField />
        <AsideList />
        <div className={styles.card__wrap}>
          <Cards />
        </div>
        <SaveLocal />
      </div>
    );
  }
}

export default App;
