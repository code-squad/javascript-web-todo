import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ShowTodo from "./ShowTodo";
import AddTodo from "./AddTodo";

class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
      todoData: [],
      doingData: [],
      doneData: [],
      error: null
    };
  }

  componentDidMount() {
    this.fetchTodoData();
  }

  fetchTodoData() {
    fetch(
      `https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          todoData: data.body,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, todoData, error } = this.state;
    return (
      <>
        <GlobalStyle />
        {error ? <p>{error.message}</p> : null}
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
