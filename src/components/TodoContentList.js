import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import RemoveButton from "./TodoButton";
import Loader from "./Loader";

const ContentUl = styled.ul`
  margin: 0;
  padding: 0;
`;

const ContentList = styled.li`
  list-style: none;
  border: 1px dotted blue;
  padding: 0.5rem;

  &:hover {
    background-color: #eee;
  }
`;

class TodoContentList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [1, 2, 3, 4], dataLoaded: false };
  }

  componentDidMount() {
    fetch(this.props.todosUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({ data: data.body, dataLoaded: true });
      });
  }

  render() {
    if (!this.state.dataLoaded) return <Loader />;
    return (
      <ContentUl>
        {this.state.data.map(list => {
          return <ContentList key={list.id}>{list.title}</ContentList>;
        })}
        {/* <RemoveButton name="&#10060;" /> */}
      </ContentUl>
    );
  }
}

TodoContentList.propTypes = {
  fetchUrl: PropTypes.string
};

export default TodoContentList;
