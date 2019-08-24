import React, { createContext, useContext, useReducer } from "react";
import todosReducer from "./todoReducer";

export const StateContext = createContext();

export const StateProvider = ({ initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(todosReducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => {
  return useContext(StateContext);
};
