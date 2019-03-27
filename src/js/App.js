import React, { Component } from 'react';
import '../scss/app.css';
import { MakeAddTodoTpl, MakeTodoListContainerTpl } from './make-tpl.js';
import { getData, taskDataUrl } from './fetch-data.js';
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
    return (
      <div className="todo-app-conatiner">
        <StatusBoard tasks={[...this.state.tasks]} />
        <MakeAddTodoTpl
          taskState={this.state}
          initTask={this.initTask}
          handleChangeWord={this.handleChangeWord}
        />
        <MakeTodoListContainerTpl
          taskState={this.state}
          handleBFolded={this.handleBFolded}
          handleBTodo={this.handleBTodo}
          initTask={this.initTask}
        />
      </div>
    );
  }
}

export default App;
