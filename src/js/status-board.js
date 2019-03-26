import React, { Component } from 'react';

class StatusBoard extends Component {
  getTaskNum(status, tasks) {
    if (tasks === null) return;
    let statusNum = 0;

    tasks.forEach(v => {
      if (v.status === status) statusNum++;
    });
    return statusNum;
  }

  render() {
    console.log(this.props);
    return (
      <div className="status-board-container">
        <div className={this.props.className}>
          {this.getTaskNum('todo', this.props.state.tasks)}
        </div>
        <div className={this.props.className}>
          {this.getTaskNum('done', this.props.state.tasks)}
        </div>
      </div>
    );
  }
}

export default StatusBoard;
