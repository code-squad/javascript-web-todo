import React, { Component } from 'react';

class ChangeStatusTask extends Component {
  constructor(props) {
    super(props);
    this.doneTask = this.doneTask;
    this.todoTask = this.todoTask;
  }

  changeStatus = e => {
    const tasks = [...this.props.taskState.tasks]
    const bTodo = this.props.taskState.bTodo;
    let title = this.props.title;

    const changedTask = tasks.map(task => {
      if (task.title === title) {
        bTodo ? (task.status = 'done') : (task.status = 'todo');
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
        {this.props.taskState.bTodo ? '->' : '<-'}
      </button>
    );
  }
}

export default ChangeStatusTask;
