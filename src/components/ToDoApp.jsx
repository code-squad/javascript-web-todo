import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ShowTodo from "./ShowTodo";
import AddTodo from "./AddTodo";

class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [],
      doingData: [],
      doneData: []
    };
    console.log("ToDoApp 생성자");
  }

  componentDidMount() {
    console.log("DidMount 실행 ");
    const data = this.fetchTodoData();
  }

  async fetchTodoData() {
    console.log("fetch시작");
    const response = await fetch(
      `https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist`
    );
    const jsonData = await response.json();
    this.setState({ todoData: jsonData.body });
    return jsonData;
  }

  render() {
    const { todoData } = this.state;
    console.log("ToDoApp 렌더링");

    return (
      <>
        <GlobalStyle />
        <AddTodo />
        <ShowTodo data={todoData} />
      </>
    );
  }
}

export default ToDoApp;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fffcf0;
    max-width: 800px;
    margin: 0 auto;
  }
`;
