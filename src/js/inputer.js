import React, { Component } from 'react';

class Inputer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange;
    this.handleEnterKeyPress = this.handleEnterKeyPress;
    this.addTask = this.addTask;
  }

  handleEnterKeyPress = e => {
    if (e.key === 'Enter') this.addTask();
  };

  handleChange = e => {
    this.props.handleChangeWord(e.target.value);
  };

  addTask = e => {
    const tasks = [...this.props.taskState.tasks]
    let IDNumber = this.props.taskState.IDNum;
    if (tasks.some(v => v.title === this.props.taskState.word)) return;
    tasks.push({
      title: `${this.props.taskState.word}`,
      id: `${IDNumber}`,
      status: 'todo',
    });
    this.props.initTask(tasks);
  };

  render() {
    return (
      <span>
        <input
          className='add-todo-inputer'
          value={this.props.taskState.word}
          onChange={this.handleChange}
          onKeyPress={this.handleEnterKeyPress}
        />
        <button className='add-todo-inputer-button' onClick={this.addTask}>
          입력
        </button>
      </span>
    );
  }
}

export default Inputer;
