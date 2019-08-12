import React from "react";
import styled from "styled-components";

import TodoSubtitle from "./TodoSubtitle";
import TodoAddInput from "./TodoAddInput";
import TodoButton from "./TodoButton";

const Add = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 0.3rem;
`;

const TodoAdd = _ => {
  const buttonClickHandler = _ => console.log("등록");

  return (
    <Add className="todo-add">
      <TodoSubtitle subtitle="할 일 입력" />
      <TodoAddInput />
      <TodoButton
        name="등록"
        clickHandler={buttonClickHandler}
        width="4rem"
        height="2rem"
      />
    </Add>
  );
};

export default TodoAdd;
