import React from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";
import TodoOutput from "./TodoOutput";
import TodoContextProvider from "./TodoContextProvider";
import Information from "./Information";
import TodoCounter from "./TodoCounter";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;

  h1 {
    font-size: 5rem;
  }
`;

const App = () => {
  return (
    <>
      <Wrapper>
        <h1>Todo App</h1>
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
