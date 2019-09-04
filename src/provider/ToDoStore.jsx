import React, { useState, useEffect, useReducer, useContext } from "react";
import useFetch from "../customHooks/useFetch";
import TodoReducer from "../reducer/TodoReducer";

export const TodoContext = React.createContext({});

export const ToDoStore = ({ children }) => {
  const [todoData, dispatch] = useReducer(TodoReducer, []);
  const [error, setError] = useState(null);

  const errorHandler = e => {
    console.log(e);
    setError(true);
  };

  const setInitTodoData = data => {
    return dispatch({ type: "INIT_TODO", payload: data });
  };

  const loading = useFetch(setInitTodoData, URL, errorHandler);

  const todoCnt = todoData.filter(v => v.status === "todo").length;
  const doneCnt = todoData.filter(v => v.status === "done").length;

  return (
    <>
      <TodoContext.Provider
        value={{ todoData, error, loading, dispatch, todoCnt, doneCnt }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};
