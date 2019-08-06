import React, { Component } from "react";
import styled from "styled-components";
import config from "../config";

import TodoSubtitle from "./TodoSubtitle";
import TodoContentList from "./TodoContentList";
import TodoButton from "./TodoButton";

const Content = styled.div`
  width: 100%;
  background-color: papayawhip;
  margin-top: 2rem;
  position: relative;
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
        />
      </Content>
    );
  }
}

export default TodoContent;
