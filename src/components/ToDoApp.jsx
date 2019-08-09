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

  countIf(randomId) {
    const todos = [...this.state.todoData];

    todos.forEach(todo => {
      if (todo.id === randomId) {
        return true;
      }
    });

    return false;
  }

  randomIdGenerator() {
    const digit1 = Math.ceil(Math.random() * 9);
    const digit10 = Math.ceil(Math.random() * 9) * 10;
    const digit100 = Math.ceil(Math.random() * 9) * 100;
    const digit1000 = Math.ceil(Math.random() * 9) * 1000;

    const randomId = digit1 + digit10 + digit100 + digit1000;

    if (this.countIf()) return this.randomIdGenerator();
    return randomId;
  }

  submitTodoHandler(newTodo) {
    const todos = [...this.state.todoData];
    todos.push({
      title: newTodo,
      id: this.randomIdGenerator(),
      status: "todo"
    });
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
        <AddTodo onSubmit={this.submitTodoHandler.bind(this)} />
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
