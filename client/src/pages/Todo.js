import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import TodoAdd from "../components/TodoAdd";
import TodoContent from "../components/TodoContent";

const StyledTodo = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 1px solid #2196f3;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  padding: 1rem;
`;

export default _ => {
  return (
    <StyledTodo>
      <Header />
      <TodoAdd />
      <TodoContent />
    </StyledTodo>
  );
};
