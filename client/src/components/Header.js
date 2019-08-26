import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { TodoContext } from "./TodoContext";
import { getNumOfTodos } from "../utils/utils";

const StyledHeader = styled.header`
  & > * {
    font-weight: 300;
  }

  h1 {
    text-align: center;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #3498db;
  height: 2rem;
`;

const Header = _ => {
  const { todos } = useContext(TodoContext);
  const statusNums = useMemo(() => getNumOfTodos(todos), [todos]);

  return (
    <StyledHeader>
      <h1>Todo</h1>
      <StyledNav>
        Todo: {statusNums.todo} Done: {statusNums.done}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
