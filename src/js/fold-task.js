import React, { Component } from 'react';

class FoldTask extends Component {
  constructor(props) {
    super(props);
    this.foldTask = this.foldTask;
  }

  foldTask = e => {
    this.props.handleBFolded()
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
