import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.props.clickHandler}>{this.props.name}</button>;
  }
}

TodoButton.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func
};

export default TodoButton;
