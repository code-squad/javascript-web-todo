import React, { Component } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";

class App extends Component {
  render() {
    return (
      <>
        <TodoInput />
        <TodoList />
      </>
    );
  }
}

export default App;
