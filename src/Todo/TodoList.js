import React, { useState, useMemo } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import {
  useTodosStateValue,
  useIsLoadingValue
} from "../StateHelper/TodoState";

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
  const todos = useTodosStateValue();
  const isLoading = useIsLoadingValue();
  const [isOpened, setIsOpened] = useState(true);

  const handleOpen = () => {
    setIsOpened(!isOpened);
  };

  // todos 새 refer 주소를 가져서 아얘 새로운 TodoItem 들이 만들어지지 않을까?
  //// todos 주소가 안바뀌나봄. TodoItem만 메모해놓으면 리랜더링 막힘
  // useMemo를 사용해야하지 않을까? 
  //// 밑에서 사용해봄 , 차이 없었음  
  const makeTodoList = data => {
    const todoList = data.map(todo => {
      return <TodoItem key={todo.id} {...todo} />;
    });

    return todoList;
  };

  // 큰 차이 없는것같고 profile탭에서 그때그때마다 시간이 다르게 찍힘, 거의 차이없음
  // const todoList = useMemo(() => makeTodoList(todos), [todos])
  
  return (
    <Background>
      <Folder>
        <h3>Todos</h3>
        <button onClick={handleOpen}>Toggle</button>
      </Folder>

      <TodoWrapper isOpened={isOpened}>
        {isLoading === true && <li>로딩중...</li>}
        {isLoading === false && makeTodoList(todos)}
        {/* {isLoading === false && todoList} */}
      </TodoWrapper>
    </Background>
  );
}
