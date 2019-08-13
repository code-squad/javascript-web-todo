import React, { useState } from "react";
import styled from "styled-components";
import Button from "../atomicComponents/Button.jsx";
import Li from "../atomicComponents/Li.jsx";
import XButton from "../atomicComponents/XButton.jsx";

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

const Ul = styled.ul`
  padding-left: 2rem;
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
    if (target.tagName !== "LI") return;
    const targetId = Number(target.dataset.id);
    const newTodos = todos.map(el => {
      if (el.id === targetId) return { ...el, status: "done" };
      return el;
    });
    setTodos(newTodos);
  };

  const deleteTodo = ({ target }) => {
    const targetId = Number(target.closest("li").dataset.id);
    const newTodos = todos.filter(el => el.id !== targetId);
    setTodos(newTodos);
  };

  return (
    <Wrapper>
      <Div>할 일 목록</Div>
      <Ul>
        {listVisible && (
          <Li contents={todos} contentKey="title" onClick={setStatusDone}>
            <XButton onClick={deleteTodo} />
          </Li>
        )}
      </Ul>
      <ToggleButton onClick={toggleLists}>{listVisible ? "접기" : "펼치기"}</ToggleButton>
    </Wrapper>
  );
};

export default TodoOutput;
