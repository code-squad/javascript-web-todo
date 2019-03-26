import React, { Component } from 'react';

class Inputer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange;
    this.handleEnterKeyPress = this.handleEnterKeyPress;
    this.addTask = this.addTask;
  }

  handleEnterKeyPress = e => {
    if(e.key === 'Enter') this.addTask()
  }

  handleChange = e => {
    this.props.handleChangeWord(e.target.value);
  };

  addTask = e => {
    const tasks = this.props.state.tasks.map(v => v);
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
      <div>
        <input
          className={this.props.className[0]}
          value={this.props.state.word}
          onChange={this.handleChange}
          onKeyPress={this.handleEnterKeyPress}
        />
        <button className={this.props.className[1]} onClick={this.addTask}>
          입력
        </button>
      </div>
    );
  }
}

export default Inputer;
