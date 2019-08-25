import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Subtitle = styled.h4`
  color: gray;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 300;
`;

const TodoSubtitle = props => <Subtitle>{props.subtitle}</Subtitle>;

TodoSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired
};

export default TodoSubtitle;
