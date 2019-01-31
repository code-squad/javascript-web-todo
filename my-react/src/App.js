import React from 'react';
import StyledTodo from './componentBlocks/StyledTodo';
import _asyncGetJson from './library/network';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.apiURI = 'http://crong.codesquad.kr:8080/todo';
    this.state = {
      folded: {
        TodoList: true,
      },
      todoData: [],
    };
  }

  componentDidMount() {
    _asyncGetJson(this.apiURI).then(todoData => this.setState({ todoData }));
  }

  render() {
    const { folded, todoData } = this.state;

    return (
      <StyledTodo.Main>
        <StyledTodo.Header>
          <h1>To-Do List</h1>
          <p>Every big dish starts with one small bite</p>
        </StyledTodo.Header>
        <StyledTodo.Input placeholder="Hello, world!" />
        <StyledTodo.List
          ItemTemplate={StyledTodo.Item}
          folded={folded.TodoList}
          todoData={todoData}
        />
      </StyledTodo.Main>
    );
  }
}

export default App;
