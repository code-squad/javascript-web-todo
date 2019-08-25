import React, { useState, createContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import config from "../config";

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [todos, setTodos] = useState(null);
  const [fetchError, setError] = useState(null);
  const [todosShowFlag, setShowFlag] = useState(true);
  const [numOfTodo, setNumOfTodo] = useState(0);
  const [numOfDone, setNumOfDone] = useState(0);

  const getNumOfTodosByStatus = (todos, status) =>
    todos ? todos.filter(todo => todo.status === status).length : 0;

  const fetchOptions = {
    url: process.env.API_URL
  };

  const { data, error, refetch } = useFetch(fetchOptions);

  useEffect(() => {
    setTodos(data);
  }, [data]);

  useEffect(() => {
    setError(error);
  }, [error]);

  useEffect(() => {
    setNumOfTodo(getNumOfTodosByStatus(todos, "todo"));
    setNumOfDone(getNumOfTodosByStatus(todos, "done"));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        fetchError,
        refetch,
        todosShowFlag,
        setShowFlag,
        numOfTodo,
        numOfDone
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
