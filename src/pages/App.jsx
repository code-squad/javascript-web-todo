import React from "react";
import styled from "styled-components";
import TodoInput from "../components/TodoInput";
import TodoOutput from "../components/TodoOutput";
import Information from "../components/Information";
import TodoCounter from "../components/TodoCounter";

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
        <TodoCounter />
        <TodoInput />
        <TodoOutput />
        <Information />
      </Wrapper>
    </>
  );
};

export default App;
