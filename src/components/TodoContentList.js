import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoContentList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props.fetchUrl);
  }

  render() {
    return (
      <ul>
        <li>1</li>
      </ul>
    );
  }
}

TodoContentList.propTypes = {
  fetchUrl: PropTypes.string
};

export default TodoContentList;
