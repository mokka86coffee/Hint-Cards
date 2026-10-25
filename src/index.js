import "./index.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { configure } from "mobx";
import { StoresProvider } from "./stores/StoresContext";

import MaterialsStore from "./stores/MaterialsStore";

configure({ enforceActions: "observed" });

createRoot(document.getElementById("root")).render(
  <StoresProvider {...{ MaterialsStore }}>
    <App />
  </StoresProvider>
);
