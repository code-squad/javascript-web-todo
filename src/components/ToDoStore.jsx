import React, { useState, useEffect, useReducer, useContext } from "react";
import useFetch from "../customHooks/useFetch";
import todoReducer from "./TodoReducer";

export const TodoContext = React.createContext({});

export const ToDoStore = props => {
  const [todoData, dispatch] = useReducer(todoReducer, []);
  const [error, setError] = useState(null);
  const config = {
    url: `https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist`
  };

  const errorHandler = e => {
    console.log(e);
    setError(true);
  };

  const setInitTodoData = data => {
    return dispatch({ type: "INIT_TODO", payload: data });
  };

  const loading = useFetch(setInitTodoData, config.url, errorHandler);

  return (
    <>
      <TodoContext.Provider value={{ todoData, error, loading, dispatch }}>
        {props.children}
      </TodoContext.Provider>
    </>
  );
};
