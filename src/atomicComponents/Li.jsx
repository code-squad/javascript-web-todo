import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLi = styled.li`
  margin: 0 1rem;
  padding: 0.25rem 1rem;
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: palevioletred;
`;

const Li = props => {
  return <StyledLi {...props}>{props.children}</StyledLi>;
};

Li.propTypes = {
  onClick: PropTypes.func
};

export default Li;
