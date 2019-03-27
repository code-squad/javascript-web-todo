import React, { Component } from 'react';

class FoldTask extends Component {
  foldTask = e => {
    this.props.handleBFolded();
  };

  render() {
    return (
      <button className={this.props.className} onClick={this.foldTask}>
        접기
      </button>
    );
  }
}

export default FoldTask;
