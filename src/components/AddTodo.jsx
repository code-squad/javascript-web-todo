const React = require("react");
const { Component } = React;

class AddTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form action="">
        <label htmlFor="">할 일 입력 : </label>
        <input type="text" />
        <input type="submit" />
      </form>
    );
  }
}

module.exports = AddTodo;
