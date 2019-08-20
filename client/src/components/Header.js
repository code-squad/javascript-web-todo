import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "./TodoContext";

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
  const { numOfTodo, numOfDone } = useContext(TodoContext);

  return (
    <StyledHeader>
      <h1>Todo</h1>
      <StyledNav>
        Todo: {numOfTodo} Done: {numOfDone}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
