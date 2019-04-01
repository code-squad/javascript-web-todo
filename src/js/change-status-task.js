import React, { Component } from 'react';

class ChangeStatusTask extends Component {
  changeStatus = e => {
    const tasks = [...this.props.taskState.tasks]
    let title = this.props.title;

    const changedTask = tasks.map(task => {
      if (task.title === title) {
        task.status === 'todo' ? (task.status = 'done') : (task.status = 'todo');
        return task;
      }
      return task;
    });

    this.props.initTask(changedTask);
  };

  render() {
    return (
      <button
        className="task-list-button"
        title={this.props.title}
        onClick={this.changeStatus}
      >
        {this.props.status === "todo" ? '끝!' : '다시'}
      </button>
    );
  }
}

export default ChangeStatusTask;
