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
  const { todos } = useContext(TodoContext);

  const getNumOfTodosByStatus = (todos, status) =>
    todos ? todos.filter(todo => todo.status === status).length : 0;

  return (
    <HeaderWrapper>
      <h1>Todo</h1>
      <nav>
        Todo: {getNumOfTodosByStatus(todos, "todo")} Done:{" "}
        {getNumOfTodosByStatus(todos, "done")}
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
