import React, { createContext, useContext } from 'react';

const Context = createContext();
export const getContext = () => useContext(Context);

export const ContextProvider = ({ children }) => {
  const results = ['word', 'sword'];
  return (
    <Context.Provider value={{ results }}>
      <div className="App">{children}</div>
    </Context.Provider>
  );
};
