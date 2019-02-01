import React from 'react';
import StyledTodo from './componentBlocks/StyledTodo';
import _asyncGetJson from './library/network';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.apiURI = 'http://crong.codesquad.kr:8080/todo';
    this.toggleFold = this.toggleFold.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.state = {
      folded: {
        TodoList: false,
      },
      todoData: [],
      inputVal: '',
    };
  }

  componentDidMount() {
    this.getTodoData();
  }

  async getTodoData() {
    const assignID = (todoItem, idx) => Object.assign(todoItem, { id: `${idx}${new Date().valueOf()}` });
    const todoJson = await _asyncGetJson(this.apiURI);
    const todoDataWithID = todoJson.map(assignID);

    this.setState({ todoData: todoDataWithID });
    return todoDataWithID;
  }

  toggleFold(target) {
    return () => this.setState({ folded: { TodoList: !this.state.folded[target] } });
  }

  deleteTodoItem(itemID) {
    return () => this.setState({ todoData: this.state.todoData.filter(todo => todo.id !== itemID) });
  }

  addTodoItem() {
    const generateID = () => `${Math.floor(Math.random() * 999 + 1)}${new Date().valueOf()}`;
    const newTodoItem = { id: `${generateID()}`, title: this.state.inputVal, status: 'todo' };

    const newTodoData = [...this.state.todoData.map(todo => Object.assign({}, todo)), newTodoItem];

    this.setState({ todoData: newTodoData, inputVal: '' });
  }

  handleInputChange(evt) {
    this.setState({ inputVal: evt.target.value });
  }

  handleInputSubmit(evt) {
    evt.preventDefault();

    this.addTodoItem();
  }

  render() {
    const { folded, todoData } = this.state;

    return (
      <StyledTodo.Main>
        <StyledTodo.Header>
          <h1>To-Do List</h1>
          <p>Every big dish starts with one small bite</p>
        </StyledTodo.Header>
        <StyledTodo.Input
          placeholder="Hello, world!"
          value={this.state.inputVal}
          onChange={this.handleInputChange}
          onSubmit={this.handleInputSubmit}
        />
        <StyledTodo.List
          ItemTemplate={StyledTodo.Item}
          folded={folded.TodoList}
          todoData={todoData}
          onFoldClick={this.toggleFold('TodoList')}
          onDelClick={this.deleteTodoItem}
        />
      </StyledTodo.Main>
    );
  }
}

export default App;
