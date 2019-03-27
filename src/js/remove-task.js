import React, { Component } from 'react';

class RemoveTask extends Component {
  removeTask = e => {
    const tasks = [...this.props.taskState.tasks]
    let title = this.props.title;
    const removedTask = tasks.filter(task => {
      return !(task.title === title);
    });
    this.props.initTask(removedTask);
  };

  render() {
    return (
      <button
        className="task-list-button"
        title={this.props.title}
        onClick={this.removeTask}
      >
        제거
      </button>
    );
  }
}

export default RemoveTask;
