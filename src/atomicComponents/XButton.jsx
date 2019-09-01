import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 50%;
  border: 0px;
  margin: 0 0.5rem;
  padding: 0;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;

  &:hover {
    background: #1976d2;
    cursor: pointer;
  }
`;

const XButton = props => {
  return <StyledButton {...props}>{props.children}❌</StyledButton>;
};

XButton.propTypes = {
  onClick: PropTypes.func
};

export default XButton;
