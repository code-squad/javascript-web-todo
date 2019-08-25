import React, { useContext } from "react";
import styled from "styled-components";
import styleOptions from "./styleOptions";

import TodoSubtitle from "./TodoSubtitle";
import TodoContentList from "./TodoContentList";
import TodoButton from "./TodoButton";
import { TodoContext } from "./TodoContext";

const StyledDiv = styled.div`
  min-height: 200px;
  margin-top: 2rem;
  position: relative;
  padding: 0.5rem 0.3rem;
  display: flex;
  flex-direction: column;
  font-weight: 300;
`;

const TodoContent = _ => {
  const { todosShowFlag, setShowFlag } = useContext(TodoContext);
  const buttonClickHandler = _ => setShowFlag(!todosShowFlag);

  return (
    <StyledDiv>
      <TodoSubtitle subtitle="할 일 목록" />
      {todosShowFlag && <TodoContentList />}
      <TodoButton
        name={todosShowFlag ? "숨기기" : "보이기"}
        clickHandler={buttonClickHandler}
        {...styleOptions.STATUS_TOGGLE_BUTTON}
      />
    </StyledDiv>
  );
};

export default TodoContent;
