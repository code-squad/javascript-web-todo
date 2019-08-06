import React, { Component } from "react";
import styled from "styled-components";

import TodoSubtitle from "./TodoSubtitle";
import TodoAddInput from "./TodoAddInput";
import TodoButton from "./TodoButton";

const Add = styled.div`
  display: flex;
  background-color: papayawhip;
  position: relative;
  align-items: center;
  justify-content: space-around;
`;

class TodoAdd extends Component {
  constructor() {
    super();
  }

  buttonClickHandler() {
    console.log("click");
  }

  render() {
    return (
      <Add className="todo-add">
        <TodoSubtitle subtitle="할 일 입력" />
        <TodoAddInput />
        <TodoButton name="등록" clickHandler={this.buttonClickHandler} />
      </Add>
    );
  }
}

export default TodoAdd;
