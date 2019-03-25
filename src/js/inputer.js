import React, { Component } from 'react';

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
    if (e.key === 'Enter');
  };

  render() {
    return (
      <input
        className="add-todo-inputer"
        value={this.props.word}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

export default Inputer;
