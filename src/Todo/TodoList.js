import React, { useState } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { useStateValue } from "../StateHelper/TodoState";

const Background = styled.div`
  background: #a6d0d1;
`;
const Folder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoWrapper = styled.ul`
  ${props => !props.isOpened && `display: none;`}
`;

export default function TodoList() {
  const { state, isLoading } = useStateValue();
  const [isOpened, setIsOpened] = useState(true);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  const makeTodoList = data => {
    const todoList = data.map((todo, idx) => {
      return <TodoItem key={todo.id} idx={idx} todo={todo} />;
    });

    return todoList;
  };

  return (
    <Background>
      <Folder>
        <h3>해야할 일들</h3>
        <button onClick={handleClick}>접기</button>
      </Folder>

      <TodoWrapper isOpened={isOpened}>
        {isLoading && <li>로딩중...</li>}
        {!isLoading && makeTodoList(state.todos)}
      </TodoWrapper>
    </Background>
  );
}
