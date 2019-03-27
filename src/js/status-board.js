import React, { Component } from 'react';

class StatusBoard extends Component {
  getTaskNum(status, tasks) {
    if (tasks === null) return;
    const filterdTask = tasks.filter(v => {
      return (v.status === status)
    });
    return filterdTask.length;
  }

  render() {
    return (
      <div className="status-board-container">
        <div className="status-board">
          <span className="status-board-content">
            할 일 : {this.getTaskNum('todo', this.props.tasks)}
          </span>
        </div>
        <div className="status-board">
          <span className="status-board-content">
            한 일 : {this.getTaskNum('done', this.props.tasks)}
          </span>
        </div>
      </div>
    );
  }
}

export default StatusBoard;
