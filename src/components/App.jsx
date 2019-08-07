import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoInput from "./TodoInput.jsx";
import TodoOutput from "./TodoOutput.jsx";

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
        <TodoInput />
        <TodoOutput />
      </Wrapper>
    </>
  );
};

export default App;
