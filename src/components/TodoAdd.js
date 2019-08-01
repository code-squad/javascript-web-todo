import React, { Component } from "react";
import TodoSubtitle from "./TodoSubtitle";
import TodoAddInput from "./TodoAddInput";
import TodoButton from "./TodoButton";

class TodoAdd extends Component {
  constructor() {
    super();
  }

  buttonClickHandler() {
    console.log("click");
  }

  render() {
    return (
      <div className="todo-add">
        <TodoSubtitle subtitle="할 일 입력" />
        <TodoAddInput />
        <TodoButton name="등록" clickHandler={this.buttonClickHandler} />
      </div>
    );
  }
}

export default TodoAdd;
