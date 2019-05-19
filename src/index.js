import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

import DevTools from "mobx-react-devtools";
import { configure } from "mobx";
import { Provider } from "mobx-react";

import MaterialsStore from "./stores/MaterialsStore";

configure({ enforceActions: "observed" });

ReactDOM.render(
  <Provider {...{ MaterialsStore }}>
    <App />
  </Provider>,
  document.getElementById("root")
);
