import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ToDoStore } from "./ToDoStore";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import Counter from "./Counter";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoStore>
        <AddTodo />
        <CounterDIV>
          <Counter />
        </CounterDIV>
        <ShowDIV>
          <ShowTodo />
        </ShowDIV>
      </ToDoStore>
    </>
  );
}

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
