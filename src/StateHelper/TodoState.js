import React, { createContext, useContext, useReducer, useState } from "react";
import todosReducer from "./todoReducer";
import useFetch from "../customHooks/useFetch";
import PropTypes from "prop-types";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  const initTodoData = todos => {
    dispatch({ type: "INIT_TODO", todos });
  };

  const isLoading = useFetch(initTodoData);

  return (
    <StateContext.Provider value={{ todos, dispatch, isLoading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => {
  return useContext(StateContext);
};

StateContext.Provider.propTypes = {
  value: PropTypes.shape({
    todos: PropTypes.array,
    dispatch: PropTypes.func,
    isLoading: PropTypes.bool
  })
};
