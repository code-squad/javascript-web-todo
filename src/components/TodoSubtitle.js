import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoSubtitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h5>{this.props.subtitle}</h5>;
  }
}

TodoSubtitle.propTypes = {
  subtitle: PropTypes.string
};

export default TodoSubtitle;
