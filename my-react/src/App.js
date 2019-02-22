import React from 'react';
import StyledTodo from './componentBlocks';
import Settings from './settings';
import actions from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.apiURI = Settings.apiURI;
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.updateTodoItem = this.updateTodoItem.bind(this);
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
    const request = new Request(Settings.graphqlApiURI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: actions.GET_DEFAULT }),
    });

    const { data } = await fetch(request).then(res => res.json());

    this.setState({ todoData: Object.values(data.getDefaultTasks) });
  }

  deleteTodoItem(itemID) {
    this.setState(prevState => ({
      todoData: prevState.todoData.filter(todo => todo.id !== itemID),
    }));
  }

  addTodoItem(todoTitle) {
    const newID = Settings.ID.mappingFn();
    const newTodoItem = { id: `${newID}`, title: todoTitle, status: 'todo' };

    this.setState(prevState => ({
      todoData: [...prevState.todoData.map(todo => Object.assign({}, todo)), newTodoItem],
    }));
  }

  updateTodoItem({ itemID, title, status }) {
    const updatedTask = { id: `${itemID}` };

    if (title) updatedTask.title = title;
    if (status) updatedTask.status = status;

    const stateUpdator = (prevState) => {
      const updatedTodoData = prevState.todoData.map((task) => {
        if (task.id !== itemID) return Object.assign({}, task);
        return Object.assign(task, updatedTask);
      });

      return { todoData: updatedTodoData };
    };

    this.setState(stateUpdator);
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
          updateFn={this.updateTodoItem}
        />
      </StyledTodo.Main>
    );
  }
}

export default App;
