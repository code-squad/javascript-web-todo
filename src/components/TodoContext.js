import React, { useState, createContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import config from "../config";

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [todos, setTodos] = useState([]);

  const fetchOptions = {
    url: config.todosUrl
  };

  const { data, error, refetch } = useFetch(fetchOptions);

  useEffect(() => {
    setTodos(data);
  }, [data]);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
