import React, { createContext, useContext, useReducer, useState } from "react";
import todosReducer from "./todoReducer";
import useFetch from "../customHooks/useFetch";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, { todos: [] });

  const initTodoData = todos => {
    dispatch({ type: "INIT_TODO", todos });
  };
  
  const isLoading = useFetch(initTodoData);

  return (
    <StateContext.Provider value={{ state, dispatch, isLoading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => {
  return useContext(StateContext);
};
