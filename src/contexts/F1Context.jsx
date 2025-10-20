import React, { createContext, useReducer } from 'react';
import { f1Reducer, initialState } from './F1Reducer.jsx';

export const F1Context = createContext();

export const F1Provider = ({ children }) => {
  const [state, dispatch] = useReducer(f1Reducer, initialState);

  return (
    <F1Context.Provider value={{ state, dispatch }}>
      {children}
    </F1Context.Provider>
  );
};