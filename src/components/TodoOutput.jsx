import React, { useState } from "react";
import styled from "styled-components";
import Button from "../atomicComponents/Button.jsx";
import TodoList from "./TodoList.jsx";

const Wrapper = styled.div`
  position: relative;
  padding: 1.5rem;
  width: 50rem;
`;

const Div = styled.div`
  padding-left: 2rem;
  color: palevioletred;
  font-size: 2rem;
  font-weight: bold;
`;

const ToggleButton = styled(Button)`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
`;

const TodoOutput = ({ todos, setTodos }) => {
  const [listVisible, setListVisible] = useState(true);

  const toggleLists = () => {
    setListVisible(!listVisible);
  };

  const setStatusDone = ({ target }) => {
    const targetId = Number(target.dataset.id);
    const newTodos = todos.map(el => {
      if (el.id === targetId) return { ...el, status: "done" };
      return el;
    });
    setTodos(newTodos);
  };

  const deleteTodo = e => {
    e.stopPropagation();
    const targetId = Number(e.target.closest("li").dataset.id);
    const newTodos = todos.filter(el => el.id !== targetId);
    setTodos(newTodos);
  };

  return (
    <Wrapper>
      <Div>할 일 목록</Div>
      {listVisible && <TodoList contents={todos} setStatusDone={setStatusDone} deleteTodo={deleteTodo} />}
      <ToggleButton onClick={toggleLists}>{listVisible ? "접기" : "펼치기"}</ToggleButton>
    </Wrapper>
  );
};

export default TodoOutput;
