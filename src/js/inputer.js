import React, { Component } from 'react';

class Inputer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange;
  }

  handleChange = e => {
    this.props.handleChangeWord(e.target.value);
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
