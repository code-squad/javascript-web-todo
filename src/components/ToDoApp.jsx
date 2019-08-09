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

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist`
      );
      if (!response.ok) throw new Error(response.status); //resolved지만 404, 500..인 경우
      if (response === undefined) throw new Error("undefined"); // Promise(rejected)인 경우
      const data = await response.json();
      this.setState({ todoData: data.body, error: false });
      console.log(this.state);
    } catch (error) {
      console.log(error.message);
      this.setState({ todoData: [], error: true });
    }
  }

  findTargetTodo(deletedId) {
    const todos = [...this.state.todoData];
    const targetTodo = todos.filter(todo => todo.id === Number(deletedId));
    return targetTodo[0];
  }

  submitHandler(newTodo) {
    const todos = [...this.state.todoData];
    todos.push({ title: newTodo, id: 1111, status: "todo" });
    this.setState({ todoData: todos });
  }

  deleteTodoHandler(deletedId) {
    const todos = [...this.state.todoData];
    const filteredTodos = todos.filter(todo => todo.id !== Number(deletedId));
    this.setState({ todoData: filteredTodos });
  }

  render() {
    const { todoData, error } = this.state;

    return (
      <>
        <GlobalStyle />
        <AddTodo onSubmit={this.submitHandler.bind(this)} />
        <ShowTodo
          data={todoData}
          error={error}
          onDelete={this.deleteTodoHandler.bind(this)}
        />
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
