import React, { Component } from 'react';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask;
  }

  addTask = (e) => {
    const tasks = this.props.state.tasks.map(v => v)
    let IDNumber = this.props.state.IDNum;
    if (tasks.some(v => v.title === this.props.state.word)) return;
    tasks.push({
      title: `${this.props.state.word}`,
      id: `${IDNumber}`,
      status: 'todo',
    });
  
    this.props.initTask(tasks);
  };

  render() {
    return (
      <button className={this.props.className} onClick={this.addTask}>
        입력
      </button>
    )
  }
}

export default AddTask