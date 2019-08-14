import React, { useContext } from "react";
import styled from "styled-components";
import Li from "../atomicComponents/Li.jsx";
import XButton from "../atomicComponents/XButton.jsx";
import TodoContext from "./TodoContext.jsx";

const StyledLi = styled(Li)`
  text-decoration: ${({ textDeco }) => (textDeco === "done" ? "line-through" : "none")};
  text-decoration-color: black;
`;

const Ul = styled.ul`
  padding-left: 2rem;
`;

const TodoList = () => {
  const { todos, updateStatus, deleteTodo } = useContext(TodoContext);
  return (
    <Ul>
      {todos.map(v => (
        <StyledLi textDeco={v.status} key={v.id} data-id={v.id} onClick={updateStatus}>
          {v.title}
          <XButton onClick={deleteTodo} />
        </StyledLi>
      ))}
    </Ul>
  );
};

export default TodoList;
