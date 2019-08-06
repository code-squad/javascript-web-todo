import React, { Component } from "react";
import PropTypes from "prop-types";

import RemoveButton from "./TodoButton";

class TodoContentList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  // async componentDidMount() {
  //   const res = await fetch(this.props.todosUrl);
  //   console.log(res);
  // }

  render() {
    return (
      <ul>
        <li>1</li>
        {/* <RemoveButton name="&#10060;" /> */}
      </ul>
    );
  }
}

TodoContentList.propTypes = {
  fetchUrl: PropTypes.string
};

export default TodoContentList;
