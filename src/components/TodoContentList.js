import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import RemoveButton from "./TodoButton";
import Loader from "./Loader";

const ContentUl = styled.ul`
  margin: 1rem 0;
  padding: 0;
`;

const ContentList = styled.li`
  list-style: none;
  padding: 0.5rem;
  width: 94%;
  display: flex;
  justify-content: space-between;
  font-weight: 300;

  &:hover {
    background-color: #eaf5fd;
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
          return (
            <ContentList key={list.id}>
              {list.title}
              <RemoveButton
                // name="&#10060;"
                name="X"
                width="1rem"
                height="1rem"
                borderRadius="50%"
              />
            </ContentList>
          );
        })}
      </ContentUl>
    );
  }
}

TodoContentList.propTypes = {
  fetchUrl: PropTypes.string
};

export default TodoContentList;
