import React from 'react';
import Settings from 'settings';
import actions from 'actions';

import StyledMain from './modules/Main';
import StyledHeader from './modules/Header';
import StyledTodoInput from './modules/TodoInput';
import StyledTodoItem from './modules/TodoItem';
import StyledTodoList from './modules/FoldableList/TodoList';

class StyledTodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.updateTodoItem = this.updateTodoItem.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
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

    const errorHandler = (/* error */) => {
      // Do proper action on error
      // And dispatch error info to app
    };
    const { data } = await fetch(request)
      .then(res => res.json())
      .catch(errorHandler);

    this.setState({ todoData: Object.values(data.getDefaultTasks) });
  }

  deleteTodoItem(itemID) {
    this.setState(prevState => ({
      todoData: prevState.todoData.filter(todo => todo.id !== itemID),
    }));
  }

  addTodoItem(todoTitle) {
    const newID = Settings.ID.mappingFn();
    const newTodoItem = { id: `${newID}`, title: todoTitle, status: 'TODO' };

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

  render() {
    const { todoData } = this.state;

    return (
      <StyledMain>
        <StyledHeader>
          <h1>To-Do List</h1>
          <p>Every big dish starts with one small bite</p>
        </StyledHeader>
        <StyledTodoInput placeholder="Hello, world!" onSubmit={this.addTodoItem} />
        <StyledTodoList
          ItemTemplate={StyledTodoItem}
          todoData={todoData}
          onDelClick={this.deleteTodoItem}
          updateFn={this.updateTodoItem}
        />
      </StyledMain>
    );
  }
}

export default StyledTodoComponent;
