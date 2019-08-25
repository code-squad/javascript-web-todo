import React, { useState, createContext, useEffect, useReducer } from "react";
import useFetch from "../hooks/useFetch";
import todoReducer from "../reducers/TodoReducer";
import PropTypes from "prop-types";

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [todos, dispatch] = useReducer(todoReducer, null);
  const [fetchError, setError] = useState(null);
  const [todosShowFlag, setShowFlag] = useState(true);

  const fetchOptions = {
    url: process.env.API_URL
  };

  const { data, error, refetch } = useFetch(fetchOptions);

  useEffect(() => {
    dispatch({ type: "READ", payload: data });
  }, [data]);

  useEffect(() => {
    setError(error);
  }, [error]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        fetchError,
        refetch,
        todosShowFlag,
        setShowFlag,
        dispatch
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

TodoContext.propTypes = {
  children: PropTypes.object
};
