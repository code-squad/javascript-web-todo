import React, { Component } from 'react';

import '../scss/app.css';

import AddTodoTpl from './template/add-todo-tpl';
import TodoListContainerTpl from './template/todo-list-container-tpl.js'
import StatusBoard from './status-board.js';

import { getData, taskDataUrl } from './fetch-data.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IDNum: 0,
      tasks: [],
      word: '',
      bFolded: true,
      bLoading: true,
    };
  }

  componentDidMount() {
    const taskData = getData(taskDataUrl);
    taskData.then(res => {
      this.initTask(res.tasks);
    });
  }

  initTask = taskData => {
    let idNum = this.state.IDNum;

    this.setState({
      IDNum: idNum + 1,
      tasks: taskData,
      word: '',
      bLoading: false,
    });
  };

  handleChangeWord = word => {
    this.setState({
      word: word,
    });
  };

  handleBFolded = e => {
    let bFolded = this.state.bFolded;
    this.setState({
      bFolded: !bFolded,
    });
  };

  render() {
    return (
      <div className="todo-app-conatiner">
        <StatusBoard tasks={[...this.state.tasks]} />
        <AddTodoTpl
          taskState={this.state}
          initTask={this.initTask}
          handleChangeWord={this.handleChangeWord}
        />
        <TodoListContainerTpl
          taskState={this.state}
          handleBFolded={this.handleBFolded}
          initTask={this.initTask}
        />
      </div>
    );
  }
}

export default App;
