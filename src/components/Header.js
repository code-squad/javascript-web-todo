import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "./TodoContext";

const HeaderWrapper = styled.div`
  & > * {
    font-weight: 300;
  }

  h1 {
    text-align: center;
  }

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #3498db;
    height: 2rem;
  }
`;

const Header = _ => {
  const { numOfTodo, numOfDone } = useContext(TodoContext);

  return (
    <HeaderWrapper>
      <h1>Todo</h1>
      <nav>
        Todo: {numOfTodo} Done: {numOfDone}
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
