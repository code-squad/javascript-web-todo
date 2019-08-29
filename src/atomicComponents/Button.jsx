import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1rem;
  padding: 0.25rem 1rem;
  min-width: 6.5rem;
  height: 3.5rem;
  font-size: 1.5rem;

  &:hover {
    background: palevioletred;
    color: white;
  }
`;

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

Button.propTypes = {
  onClick: PropTypes.func
};

export default React.memo(Button);
