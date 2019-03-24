import React, { Component } from 'react';
import '../scss/app.css';
import { MakeTaskDom, MakeLoadingDom, MakeWarningDom } from './make-dom.js';

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
    this.getData('https://javascript-web-todo-server.herokuapp.com/');
  }

  async getData(dataUrl) {
    try {
      const fetchedRes = await fetch(dataUrl);
      const jsonData = await fetchedRes.json();
      this.handleData(jsonData);
    } catch (err) {
      console.log(err);
    }
  }

  handleData = jsonData => {
    this.setState({
      tasks: jsonData,
    });
  };

  renderWarning = tasks => {
    if (tasks === null)
      return <div className="warning">잠시만 기다려주세요.</div>;
    if (tasks.some(v => v.title === this.state.word))
      return <MakeWarningDom className="warning" />;
    return;
  };

  renderTaskDom = () => {
    if (this.state.tasks === null)
      return <MakeLoadingDom className="loading" />;
    return <MakeTaskDom data={this.state.tasks} removeTask={this.removeTask} />;
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') this.addTask(e);
  };

  handleChange = e => {
    this.setState({
      word: e.target.value,
    });
  };

  addTask = e => {
    const tasks = this.state.tasks.slice();
    let IDNumber = this.state.IDNum;
    if (tasks.some(v => v.title === this.state.word)) return;
    tasks.push({
      title: `${this.state.word}`,
      id: `${IDNumber}`,
      status: 'todo',
    });

    this.setState({
      word: '',
      tasks: tasks,
      IDNum: IDNumber + 1,
    });
  };

  removeTask = e => {
    const tasks = this.state.tasks.slice();
    const title = e.target.parentNode.innerText.split('\n')[0];
    const removedTask = tasks.filter(task => {
      return !(task.title === title);
    });

    this.setState({
      tasks: removedTask,
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
          할일 입력:{' '}
          <input
            className="add-todo-inputer"
            value={this.state.word}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <button className="add-todo-inputer-button" onClick={this.addTask}>
            입력
          </button>
          <div className="warning">{this.renderWarning(this.state.tasks)}</div>
        </div>
        <div className="todo-list-container">
          해야할 일들
          <button className="todo-list-hide-button" onClick={this.hideTask}>
            접기
          </button>
          <div className="todo-list">{this.renderTaskDom()}</div>
        </div>
      </div>
    );
  }
}

export default App;
