import React, { useState, useEffect, useReducer } from "react";
import styled, { createGlobalStyle } from "styled-components";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import Counter from "./Counter";
import useFetch from "../customHooks/useFetch";
import todoReducer from "./TodoReducer";

const ToDoApp = () => {
  const [todoData, dispatch] = useReducer(todoReducer, []);
  const [error, setError] = useState(null);

  const config = {
    // config를 어디에 분리하면 좋을까?
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
      <GlobalStyle />
      <AddTodo onSubmit={dispatch} />
      <CounterDIV>
        <Counter data={todoData} />
      </CounterDIV>
      <ShowDIV>
        <ShowTodo
          error={error}
          loading={loading}
          data={todoData}
          onDelete={dispatch}
          onChange={dispatch}
        />
      </ShowDIV>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fffcf0;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const CounterDIV = styled.div`
  font-family: Monospace;
  font-weight: 300;
  margin-top: 4em;
  text-align: right;
`;

const ShowDIV = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default ToDoApp;
