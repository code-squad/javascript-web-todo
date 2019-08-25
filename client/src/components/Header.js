import React, { useContext, useEffect, useState } from "react";
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

const getNumOfTodos = todos => {
  return todos
    ? {
        todo: todos.filter(todo => todo.status === "todo").length,
        done: todos.filter(todo => todo.status === "done").length
      }
    : { todo: 0, done: 0 };
};

const Header = _ => {
  const { todos } = useContext(TodoContext);
  const [nums, setNums] = useState({ todo: 0, done: 0 });

  useEffect(() => {
    setNums(getNumOfTodos(todos));
  }, [todos]);

  return (
    <StyledHeader>
      <h1>Todo</h1>
      <StyledNav>
        Todo: {nums.todo} Done: {nums.done}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
