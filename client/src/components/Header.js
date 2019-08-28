import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { TodoContext } from "./TodoContext";
import { getNumOfTodos } from "../utils/utils";

export default _ => {
  const { todos } = useContext(TodoContext);
  const statusNums = useMemo(() => getNumOfTodos(todos), [todos]);

  return (
    <StyledHeader>
      <h1>Todo</h1>
      <StyledDiv>
        Todo: {statusNums.todo} Done: {statusNums.done}
      </StyledDiv>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  & > * {
    font-weight: 300;
  }

  h1 {
    text-align: center;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #3498db;
  height: 2rem;
`;
