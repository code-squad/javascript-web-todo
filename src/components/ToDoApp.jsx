import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import useFetch from "./useFetch";
import Counter from "./Counter";

export const ToDoContext = React.createContext();

const ToDoApp = () => {
  const [todoData, setTodoData] = useState([]);
  const [error, setError] = useState(null);
  const loading = useFetch(
    setTodoData,
    `https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist`,
    errorHandler
  );

  const errorHandler = e => {
    console.log(e);
    setError(true);
  };

  const countIf = randomId => {
    const todos = [...todoData];

    todos.forEach(todo => {
      if (todo.id === randomId) {
        return true;
      }
    });

    return false;
  };

  const randomIdGenerator = () => {
    const randomId = Math.floor(Math.random() * 9999) + 1;

    if (countIf()) return randomIdGenerator();
    return randomId;
  };

  const submitTodoHandler = newTodo => {
    const todos = [...todoData];
    todos.push({
      title: newTodo,
      id: randomIdGenerator(),
      status: "todo"
    });

    setTodoData(todos);
  };

  const deleteItemHandler = deletedItem => {
    const deletedId = deletedItem.id;
    const todos = [...todoData];
    const filteredTodos = todos.filter(todo => todo.id !== Number(deletedId));

    setTodoData(filteredTodos);
  };

  const changeItemHandler = changedItem => {
    const beforeStatus = changedItem.status;
    const afterStatus = beforeStatus === "todo" ? "done" : "todo";

    let todos = [...todoData];
    let target = todos.filter(todo => todo.id === changedItem.id);
    target[0].status = afterStatus;

    setTodoData(todos);
  };

  return (
    <>
      <GlobalStyle />
      <ToDoContext.Provider
        value={{
          todoData,
          error,
          loading,
          deleteItemHandler,
          changeItemHandler,
          submitTodoHandler
        }}
      >
        <AddTodo />
        <DIV>
          <ShowTodo />
        </DIV>
        <Counter />
      </ToDoContext.Provider>
    </>
  );
};

const DIV = styled.div`
  display: flex;
  justify-content: space-around;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fffcf0;
    max-width: 800px;
    margin: 0 auto;
  }
`;

export default ToDoApp;
