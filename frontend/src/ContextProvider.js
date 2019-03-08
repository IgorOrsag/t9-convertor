import React, { createContext, useContext, useReducer } from 'react';

import * as c from './constants';
const reducer = (state, action) => {
  switch (action.type) {
    case c.SET_WORDS:
      return [...action.payload];
    default:
      return state;
  }
};

const Context = createContext();
export const getContext = () => useContext(Context);

export const ContextProvider = ({ children }) => {
  const initialResults = [];
  const [results, dispatch] = useReducer(reducer, initialResults);
  return (
    <Context.Provider value={{ results, dispatch }}>
      <div className="App">{children}</div>
    </Context.Provider>
  );
};
