import React, { Component, useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import ShowDone from "./ShowDone";

const ToDoApp = props => {
  const [todoData, setTodoData] = useState([]);
  const [doneData, setDoneData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist`
      );
      if (!response.ok) throw new Error(response.status); //resolved지만 404, 500..인 경우
      if (response === undefined) throw new Error("undefined"); // Promise(rejected)인 경우
      const data = await response.json();
      setTodoData(data.body);
    }
    try {
      fetchData();
    } catch (error) {
      console.log(error.message);
      setTodoData([]);
      setError(true);
    }
  }, []);

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
    const digit1 = Math.ceil(Math.random() * 9);
    const digit10 = Math.ceil(Math.random() * 9) * 10;
    const digit100 = Math.ceil(Math.random() * 9) * 100;
    const digit1000 = Math.ceil(Math.random() * 9) * 1000;

    const randomId = digit1 + digit10 + digit100 + digit1000;

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
    const deletedStatus = deletedItem.status;

    if (deletedStatus === "todo") {
      const todos = [...todoData];
      const filteredTodos = todos.filter(todo => todo.id !== Number(deletedId));
      setTodoData(filteredTodos);
    } else if (deletedStatus === "done") {
      const dones = [...doneData];
      const filteredDones = dones.filter(done => done.id !== Number(deletedId));
      setDoneData(filteredDones);
    }
  };

  const changeItemHandler = changedItem => {
    let changedStatus = changedItem.status;

    if (changedStatus === "todo") {
      deleteItemHandler(changedItem);
      changedItem.status = "done";
      const dones = [...doneData];
      dones.push(changedItem);
      setDoneData(dones);
    } else if (changedStatus === "done") {
      deleteItemHandler(changedItem);
      changedItem.status = "todo";
      const todos = [...todoData];
      todos.push(changedItem);
      setTodoData(todos);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AddTodo onSubmit={submitTodoHandler} />
      <DIV>
        <ShowTodo
          data={todoData}
          error={error}
          onDelete={deleteItemHandler}
          onChange={changeItemHandler}
        />
        <ShowDone
          data={doneData}
          onDelete={deleteItemHandler}
          onChange={changeItemHandler}
        />
      </DIV>
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
