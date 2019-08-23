import React, { useState } from "react";
import TodoItem from "./TodoItem";
import styled, { css } from "styled-components";
import { useStateValue } from "../TodoState";

const Background = styled.div`
  background: #a6d0d1;
`;
const Folder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoWrapper = styled.ul`
  ${props =>
    !props.isOpened &&
    css`
      display: none;
    `}
`;

export default function TodoList(props) {
  const [{ todos },] = useStateValue();
  const [isOpened, setIsOpened] = useState(true);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };


  const todoList = todos.map((todo, idx) => {
    return <TodoItem idx={idx} key={todo.id} />;
  });


  
  return (
    <Background>
      <Folder>
        <h3>해야할 일들</h3>
        <button onClick={handleClick}>접기</button>
      </Folder>
      <TodoWrapper isOpened={isOpened}>{todoList}</TodoWrapper>
    </Background>
  );
}
