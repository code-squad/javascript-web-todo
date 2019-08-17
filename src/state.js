import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  console.log("넘겨받는 initialState",initialState);
  console.log("useReducer가 만드는 value",useReducer(reducer, initialState))
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => {
  // console.log(useContext(StateContext))
  return useContext(StateContext);
};
