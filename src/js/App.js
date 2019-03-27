import React, { Component } from 'react';
import '../scss/app.css';
import {
  MakeTodoTpl,
  MakeDoneTpl,
  MakeLoadingTpl,
  MakeAddTodoTpl,
} from './make-tpl.js';
import { getData, taskDataUrl } from './fetch-data.js';
import FoldTask from './fold-task.js';
import StatusBoard from './status-board.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IDNum: 0,
      tasks: [],
      word: '',
      bFolded: true,
      bTodo: true,
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

  handleBTodo = e => {
    let bTodo = this.state.bTodo;
    this.setState({
      bTodo: !bTodo,
    });
  };

  render() { 
    let hidingClass = ['todo-list-container'];
    if (!this.state.bFolded) {
      hidingClass = ['hide', 'todo-list-container'];
    }
    return (
      <div className="todo-app-conatiner">
        <StatusBoard tasks={[...this.state.tasks]} />
        <MakeAddTodoTpl
          taskState={this.state}
          initTask={this.initTask}
          handleChangeWord={this.handleChangeWord}
        />
        <div className={hidingClass.join(' ')}>
          해야할 일들
          <FoldTask
            className="todo-list-hide-button"
            handleBFolded={this.handleBFolded}
          />
          <button className="todo-list-nav-button" onClick={this.handleBTodo}>
            {this.state.bTodo ? '할 일' : '한 일'}
          </button>
          <div className="todo-list">
            {this.state.tasks === null ? (
              <MakeLoadingTpl className="loading" />
            ) : this.state.bTodo ? (
              <MakeTodoTpl taskState={this.state} initTask={this.initTask} />
            ) : (
              <MakeDoneTpl taskState={this.state} initTask={this.initTask} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
