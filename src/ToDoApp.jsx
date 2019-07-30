const React = require("react");
const { Component } = React;
const ShowTodo = require("./components/ShowTodo.jsx");
const AddTodo = require("./components/AddTodo.jsx");

class ToDoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <AddTodo />
        <ShowTodo />
      </>
    );
  }
}

module.exports = ToDoApp;
