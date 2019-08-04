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
      doneData: [],
      error: null
    };
  }

  componentDidMount() {
    this.fetchTodoData()
      .then(data => this.setState({ todoData: data.body, error: false }))
      .catch(error => {
        console.log(error); // error의 status에 따라 분기 처리 필요 -> 어떻게 확인 하지?
        this.setState({ todoData: [], error: true });
      });
  }

  async fetchTodoData() {
    const response = await fetch(
      `https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist`
    );
    if (response.ok) {
      if (response.status === 200) return await response.json();
      else throw new Error(response); // response.ok가 true지만 404, 500 Error등
    }
    throw new Error(response); // reject인 경우
  }

  render() {
    const { todoData, error } = this.state;

    return (
      <>
        <GlobalStyle />
        <AddTodo />
        <ShowTodo data={todoData} error={error} />
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fffcf0;
    max-width: 800px;
    margin: 0 auto;
  }
`;

export default ToDoApp;
