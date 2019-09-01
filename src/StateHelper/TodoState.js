import React, { createContext, useContext, useReducer, useState } from "react";
import todosReducer from "./todoReducer";
import useFetch from "../customHooks/useFetch";
import PropTypes from "prop-types";

const TodosStateContext = createContext();
const TodosDispatchContext = createContext();
const IsLoadingContext = createContext();

export const StateProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  const initTodoData = todos => {
    dispatch({ type: "INIT_TODO", todos });
  };

  const isLoading = useFetch(initTodoData);

  return (
    <TodosStateContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        <IsLoadingContext.Provider value={isLoading}>
          {children}
        </IsLoadingContext.Provider>
      </TodosDispatchContext.Provider>
    </TodosStateContext.Provider>
  );
};

export const useTodosStateValue = () => {
  return useContext(TodosStateContext);
};

export const useTodosDispatchValue = () => {
  return useContext(TodosDispatchContext);
};

export const useIsLoadingValue = () => {
  return useContext(IsLoadingContext);
};

TodosStateContext.Provider.propTypes = {
  value: PropTypes.array
};

TodosDispatchContext.Provider.propTypes = {
  value: PropTypes.func
};

IsLoadingContext.Provider.propTypes = {
  value: PropTypes.bool
};
