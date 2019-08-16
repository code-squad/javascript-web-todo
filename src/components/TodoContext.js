import React, { useState, createContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import config from "../config";

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [todos, setTodos] = useState(null);
  const [fetchError, setError] = useState(null);

  const fetchOptions = {
    url: config.todosUrl
  };

  const { data, error, refetch, loading } = useFetch(fetchOptions);

  useEffect(() => {
    setTodos(data);
  }, [data]);

  useEffect(() => {
    setError(error);
  }, [error]);

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, fetchError, refetch, loading }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
