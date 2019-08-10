import React from "react";
import styled from "styled-components";

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
    background: palevioletred;
  }
`;

const XButton = props => {
  return <StyledButton {...props}>{props.children}❌</StyledButton>;
};

export default XButton;
