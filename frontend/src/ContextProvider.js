import React, { createContext, useContext, useReducer } from 'react';

import * as c from './constants';

const initialState = { results: [], error: null };
const reducer = (state, action) => {
  switch (action.type) {
    case c.SET_WORDS:
      return { ...state, error: null, results: action.payload };
    case c.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const Context = createContext();
export const getContext = () => useContext(Context);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">{children}</div>
    </Context.Provider>
  );
};
