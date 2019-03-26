import React, { Component } from 'react';
import '../scss/app.css';
import { MakeTaskDom, MakeLoadingDom, MakeAlarmDom } from './make-dom.js';
import { getData, taskDataUrl } from './fetch-data.js';
import Inputer from './inputer.js';
import FoldTask from './fold-task.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IDNum: 0,
      tasks: null,
      word: '',
      bFolded: true,
    };
  }

  componentDidMount() {
    const taskData = getData(taskDataUrl);
    taskData.then(res => {
      this.initTask(res);
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

  render() {
    let inputerClass = ['add-todo-inputer', 'add-todo-inputer-button']
    let hidingClass = ['todo-list-container'];
    if (!this.state.bFolded) {
      hidingClass = ['hide', 'todo-list-container'];
    }

    return (
      <div className="todo-app-conatiner">
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
          <div className="todo-list">
            {this.state.tasks === null ? (
              <MakeLoadingDom className="loading" />
            ) : (
              <MakeTaskDom state={this.state} initTask={this.initTask} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
