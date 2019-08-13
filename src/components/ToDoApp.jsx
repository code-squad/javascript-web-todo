import React, { Component, useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import useFetch from "./useFetch";

const ToDoApp = props => {
  const [todoData, setTodoData] = useState([]);
  const [error, setError] = useState(null);
  const [fetchData, setFetchData] = useFetch();

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

  // useEffect(() => {
  //   console.log("useEffect");
  //   const result = setFetchData(
  //     `https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist`
  //   );

  //   // console.log(result);
  //   // console.log(fetchData);

  //   // 받은 결과로 error 처리하거나 todoData로 setState해야함.
  // }, []);

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
      <AddTodo onSubmit={submitTodoHandler} />
      <DIV>
        <ShowTodo
          data={todoData}
          error={error}
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
