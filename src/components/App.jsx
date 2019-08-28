import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ToDoStore } from "./ToDoStore";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import Counter from "./Counter";
import NavTodo from "./NavTodo";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavTodo />
      <ToDoStore>
        <AddTodo />
        <Counter />
        <ShowTodo />
      </ToDoStore>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fffcf0;
    max-width: 800px;
    margin: 0 auto;
    font-family: Monospace;
  }
`;

const CounterDIV = styled.div`
  font-weight: 300;
  margin-top: 4em;
  text-align: right;
`;
