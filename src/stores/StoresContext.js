import React, { createContext, useContext } from "react";

// mobx-react 10 больше не содержит Provider/inject, поэтому сторы передаём через обычный React context
export const StoresContext = createContext({});

export const StoresProvider = ({ children, ...stores }) => (
  <StoresContext.Provider value={stores}>{children}</StoresContext.Provider>
);

export const inject = (...names) => Component => {
  const Injected = props => {
    const stores = useContext(StoresContext);
    const injected = {};
    names.forEach(name => (injected[name] = stores[name]));
    return <Component {...injected} {...props} />;
  };
  Injected.displayName = `inject(${Component.displayName || Component.name})`;
  return Injected;
};
