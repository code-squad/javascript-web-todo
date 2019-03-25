import React, { Component } from 'react';
import '../scss/app.css';
import { MakeTaskDom, MakeLoadingDom, MakeWarningDom } from './make-dom.js';
import { getData, taskDataUrl } from './fetch-data.js';
import Inputer from './inputer.js';
import AddTask from './add-task.js';
import RemoveTask from './remove-task.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IDNum: 0,
      tasks: null,
      word: '',
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

  renderWarning = tasks => {
    if (tasks === null)
      return <div className="warning">잠시만 기다려주세요.</div>;
    if (tasks.some(v => v.title === this.state.word))
      return <MakeWarningDom className="warning" />;
    return;
  };

  // renderTaskDom = () => {
  //   if (this.state.tasks === null)
  //     return <MakeLoadingDom className="loading" />;
  //   return <MakeTaskDom data={this.state.tasks} removeTask={this.removeTask} />;
  // };

  handleChange = e => {
    this.setState({
      word: e.target.value,
    });
  };

  hideTask = e => {
    const btnDom = e.target;
    if (btnDom.innerText === '접기') {
      btnDom.innerText = '열기';
      btnDom.parentNode.classList.add('hide');
    } else {
      btnDom.innerText = '접기';
      btnDom.parentNode.classList.remove('hide');
    }
  };

  render() {
    return (
      <div className="todo-app-conatiner">
        <div className="add-todo">
          할일 입력:
          <Inputer
            word={this.state.word}
            handleChangeWord={this.handleChangeWord}
            className="add-todo-inputer"
            onKeyPress={this.handleKeyPress}
          />
          <AddTask
            state={this.state}
            initTask={this.initTask}
            className="add-todo-inputer-button"
          />
          <div className="warning">{this.renderWarning(this.state.tasks)}</div>
        </div>
        <div className="todo-list-container">
          해야할 일들
          <button className="todo-list-hide-button" onClick={this.hideTask}>
            접기
          </button>
          <div className="todo-list">
            {this.state.tasks === null ? (
              <MakeLoadingDom className="loading" />
            ) : (
              <MakeTaskDom state={this.state} initTask={this.initTask}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
