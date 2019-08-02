import React, { Component } from "react";
import TodoSubtitle from "./TodoSubtitle";
import TodoContentList from "./TodoContentList";
import TodoButton from "./TodoButton";

class TodoContents extends Component {
  constructor() {
    super();
  }

  buttonClickHandler() {
    console.log("접기");
  }

  render() {
    return (
      <div>
        <TodoSubtitle subtitle="할 일 목록" />
        <TodoContentList fetchUrl="www.google.com" />
        <TodoButton name="접기" clickHandler={this.buttonClickHandler} />
      </div>
    );
  }
}

export default TodoContents;
