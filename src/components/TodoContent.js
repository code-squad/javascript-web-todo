import React from "react";
import styled from "styled-components";
import config from "../config";

import TodoSubtitle from "./TodoSubtitle";
import TodoContentList from "./TodoContentList";
import TodoButton from "./TodoButton";

const Content = styled.div`
  min-height: 200px;
  margin-top: 2rem;
  position: relative;
  padding: 0.5rem 0.3rem;
  display: flex;
  flex-direction: column;
  font-weight: 300;
`;

const TodoContent = _ => {
  const buttonClickHandler = _ => console.log("접기");

  return (
    <Content>
      <TodoSubtitle subtitle="할 일 목록" />
      <TodoContentList todosUrl={config.todosUrl} />
      <TodoButton
        name="접기"
        clickHandler={buttonClickHandler}
        absolute={true}
        width="4rem"
        height="2rem"
      />
    </Content>
  );
};

export default TodoContent;
