import React, { useState, createContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import config from "../config";

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [todos, setTodos] = useState(null);
  const [fetchError, setError] = useState(null);
  const [todosShowFlag, setShowFlag] = useState(true);

  const fetchOptions = {
    url: config.todosUrl
  };

  const { data, error, refetch } = useFetch(fetchOptions);

  useEffect(() => {
    setTodos(data);
  }, [data]);

  useEffect(() => {
    setError(error);
  }, [error]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        fetchError,
        refetch,
        todosShowFlag,
        setShowFlag
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
