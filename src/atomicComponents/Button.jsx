import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1rem;
  padding: 0.25rem 1rem;
  width: 6.5rem;
  height: 3.5rem;
  font-size: 1.5rem;

  &:hover {
    background: palevioletred;
    color: white;
  }
`;
class Button extends Component {
  render() {
    const { className, children } = this.props;
    return <StyledButton className={className}>{children}</StyledButton>;
  }
}

export default Button;
