import React from 'react';
import StyledTodo from './componentBlocks';
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
    this.setState(prevState => ({
      todoData: prevState.todoData.filter(todo => todo.localId !== itemID),
    }));
  }

  addTodoItem(todoTitle) {
    const newID = Settings.ID.mappingFn();
    const newTodoItem = { localId: `${newID}`, title: todoTitle, status: 'todo' };

    this.setState(prevState => ({
      todoData: [...prevState.todoData.map(todo => Object.assign({}, todo)), newTodoItem],
    }));
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
