import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoInput from "./TodoInput";
import TodoOutput from "./TodoOutput";
import TodoContextProvider from "./TodoContextProvider";
import Information from "./Information";
import TodoCounter from "./TodoCounter";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>Todo App</Title>
        <TodoContextProvider>
          <TodoCounter />
          <TodoInput />
          <TodoOutput />
          <Information />
        </TodoContextProvider>
      </Wrapper>
    </>
  );
};

export default App;
