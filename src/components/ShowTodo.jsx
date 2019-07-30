const React = require("react");
const { Component } = React;

class ShowTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p>해야할 일들</p>
        <ul>
          <li>공부하기</li>
          <li>스터디준비</li>
          <li>알고리즘공부</li>
          <li>컴퓨터게임</li>
        </ul>
      </>
    );
  }
}

module.exports = ShowTodo;
