import React, { useState } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { useTodosStateValue , useIsLoadingValue } from "../StateHelper/TodoState";

const Background = styled.div``;

const Folder = styled.div`
  background: #ececec;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    margin-left: 2rem;
  }
`;

const TodoWrapper = styled.ul`
  ${props => !props.isOpened && `display: none;`}
`;

export default function TodoList() {
  const todos  = useTodosStateValue();
  const isLoading = useIsLoadingValue();
  const [isOpened, setIsOpened] = useState(true);

  const handleOpen = () => {
    setIsOpened(!isOpened);
  };

  const makeTodoList = data => {
    const todoList = data.map(todo => {
      return <TodoItem key={todo.id} {...todo} />;
    });

    return todoList;
  };

  return (
    <Background>
      <Folder>
        <h3>Todos</h3>
        <button onClick={handleOpen}>Toggle</button>
      </Folder>

      <TodoWrapper isOpened={isOpened}>
        {isLoading === true && <li>로딩중...</li>}
        {isLoading === false && makeTodoList(todos)}
      </TodoWrapper>
    </Background>
  );
}
