import React, { Component } from 'react';
import AddTask from "./add-task.js";

class Inputer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange;
    this.handleKeyPress = this.handleKeyPress;
  }

  handleChange = e => {
    this.props.handleChangeWord(e.target.value);
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') console.dir(AddTask);
  };

  render() {
    return (
      <input
        className={this.props.className}
        value={this.props.word}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

export default Inputer;
