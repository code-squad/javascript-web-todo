import React, { Component } from "react";
import styled from "styled-components";
import config from "../config";

import TodoSubtitle from "./TodoSubtitle";
import TodoContentList from "./TodoContentList";
import TodoButton from "./TodoButton";

const Content = styled.div`
  width: 100%;
  min-height: 200px;
  margin-top: 2rem;
  position: relative;
  padding: 0.5rem 0.3rem;
  display: flex;
  flex-direction: column;
`;

class TodoContent extends Component {
  constructor() {
    super();
  }

  buttonClickHandler() {
    console.log("접기");
  }

  render() {
    return (
      <Content>
        <TodoSubtitle subtitle="할 일 목록" />
        <TodoContentList todosUrl={config.todosUrl} />
        <TodoButton
          name="접기"
          clickHandler={this.buttonClickHandler}
          absolute={true}
          width="4rem"
          height="2rem"
        />
      </Content>
    );
  }
}

export default TodoContent;
