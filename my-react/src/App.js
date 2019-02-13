import React from 'react';
import StyledTodo from './componentBlocks/StyledTodo';
import { asyncGetJson } from './lib/network';
import Settings from './settings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.apiURI = Settings.apiURI;
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.state = {
      todoData: [
        // Default value before fetch completion
        ...Settings.defaultTodoData,
      ],
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
    const generateID = Settings.ID.mappingFn;
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
