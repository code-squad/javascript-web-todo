import React from "react";
import styled from "styled-components";

import TodoAdd from "./components/TodoAdd";
import TodoContent from "./components/TodoContent";
import { TodoProvider } from "./components/TodoContext";
import Header from "./components/Header";

const StyledRoot = styled.div`
  width: 480px;
  margin: 0 auto;
  border: 1px solid #2196f3;
  border-radius: 0.4rem;
  padding: 1rem;
`;

const Root = _ => {
  return (
    <TodoProvider>
      <StyledRoot>
        <Header />
        <TodoAdd />
        <TodoContent />
      </StyledRoot>
    </TodoProvider>
  );
};

export default Root;
