import React, { useState, useEffect, useReducer, useContext } from "react";
import useFetch from "../customHooks/useFetch";
import TodoReducer from "./TodoReducer";
import config from "../config";

export const TodoContext = React.createContext({});

export const ToDoStore = ({ children }) => {
  const [todoData, dispatch] = useReducer(TodoReducer, []);
  const [error, setError] = useState(null);
  const { url } = config;

  const errorHandler = e => {
    console.log(e);
    setError(true);
  };

  const setInitTodoData = data => {
    return dispatch({ type: "INIT_TODO", payload: data });
  };

  const loading = useFetch(setInitTodoData, url, errorHandler);

  return (
    <>
      <TodoContext.Provider value={{ todoData, error, loading, dispatch }}>
        {children}
      </TodoContext.Provider>
    </>
  );
};
