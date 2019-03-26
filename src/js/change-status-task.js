import React, { Component } from 'react';

class ChangeStatusTask extends Component {
  constructor(props) {
    super(props);
    this.doneTask = this.doneTask;
    this.todoTask = this.todoTask;
  }

  changeStatus = e => {
    const tasks = this.props.state.tasks.map(v => v);
    const bTodo = this.props.state.bTodo
    let title = this.props.title;
    
    const changedTask = tasks.map(task => {
      if(task.title === title) {
        if(bTodo) {
          task.status = 'done'
        } else {
          task.status = 'todo'
        }
        console.log(task);
        return task
      }
      return task
    });
    this.props.initTask(changedTask);
  }

  render() {
    return (
      <button
        className="task-list-button"
        title={this.props.title}
        onClick={this.changeStatus}
      >
        {this.props.state.bTodo ? '할일로' : '한일로'}
      </button>
    );
  }
}

export default ChangeStatusTask;
