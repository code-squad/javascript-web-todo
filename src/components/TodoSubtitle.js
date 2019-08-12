import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Subtitle = styled.h4`
  color: gray;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 300;
`;

class TodoSubtitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Subtitle>{this.props.subtitle}</Subtitle>;
  }
}

TodoSubtitle.propTypes = {
  subtitle: PropTypes.string
};

export default TodoSubtitle;
