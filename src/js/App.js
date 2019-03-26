import React, { Component } from 'react';
import '../scss/app.css';
import {
  MakeTodoDom,
  MakeDoneDom,
  MakeLoadingDom,
  MakeAlarmDom,
} from './make-dom.js';
import { getData, taskDataUrl } from './fetch-data.js';
import Inputer from './inputer.js';
import FoldTask from './fold-task.js';
import StatusBoard from "./status-board.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IDNum: 0,
      tasks: null,
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
    console.log(taskData);
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
    let inputerClass = ['add-todo-inputer', 'add-todo-inputer-button'];
    let hidingClass = ['todo-list-container'];
    if (!this.state.bFolded) {
      hidingClass = ['hide', 'todo-list-container'];
    }

    return (
      <div className="todo-app-conatiner">
        <StatusBoard state={this.state} className='statue-board' />
        <div className="add-todo">
          할일 입력:
          <Inputer
            state={this.state}
            initTask={this.initTask}
            handleChangeWord={this.handleChangeWord}
            className={inputerClass}
          />
          <MakeAlarmDom className="alarm" state={this.state} />
        </div>
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
              <MakeLoadingDom className="loading" />
            ) : this.state.bTodo ? (
              <MakeTodoDom state={this.state} initTask={this.initTask} />
            ) : (
              <MakeDoneDom state={this.state} initTask={this.initTask} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
