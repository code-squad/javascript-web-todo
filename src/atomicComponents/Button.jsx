import React, { Component } from "react";
import styled from "styled-components";

const SButton = styled.button`
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
    return <SButton>{this.props.text}</SButton>;
  }
}

export default Button;
