import React from 'react';
import StyledTodo from './componentBlocks/StyledTodo';
import { asyncGetJson } from './library/network';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.apiURI = 'http://crong.codesquad.kr:8080/todo';
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.state = {
      todoData: [],
    };
  }

  componentDidMount() {
    this.getTodoData();
  }

  async getTodoData() {
    const assignID = (todoItem, idx) => Object.assign(todoItem, { localId: `${idx}${new Date().valueOf()}` });
    const todoJson = await asyncGetJson(this.apiURI);
    const todoDataWithID = todoJson.map(assignID);

    this.setState({ todoData: todoDataWithID });
    return todoDataWithID;
  }

  deleteTodoItem(itemID) {
    const { todoData } = this.state;
    return () => this.setState({ todoData: todoData.filter(todo => todo.localId !== itemID) });
  }

  addTodoItem(todoTitle) {
    const { todoData } = this.state;
    const generateID = () => `${Math.floor(Math.random() * 999 + 1)}${new Date().valueOf()}`;
    const newTodoItem = { localId: `${generateID()}`, title: todoTitle, status: 'todo' };

    const newTodoData = [...todoData.map(todo => Object.assign({}, todo)), newTodoItem];

    this.setState({ todoData: newTodoData });
  }

  handleInputSubmit(inputVal) {
    this.addTodoItem(inputVal);
  }

  render() {
    const { todoData } = this.state;

    return (
      <StyledTodo.Main>
        <StyledTodo.Header>
          <h1>To-Do List</h1>
          <p>Every big dish starts with one small bite</p>
        </StyledTodo.Header>
        <StyledTodo.Input placeholder="Hello, world!" onSubmit={this.handleInputSubmit} />
        <StyledTodo.FoldableList
          ItemTemplate={StyledTodo.Item}
          todoData={todoData}
          onDelClick={this.deleteTodoItem}
        />
      </StyledTodo.Main>
    );
  }
}

export default App;
