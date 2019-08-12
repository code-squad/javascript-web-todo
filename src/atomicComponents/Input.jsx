import React, { Component } from "react";
import styled from "styled-components";

const SInput = styled.input`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1rem;
  padding: 0.25rem 1rem;
  width: 25rem;
  height: 3.5rem;
`;

class Input extends Component {
  render() {
    return <SInput type={this.props.type} placeholder={this.props.placeholder} />;
  }
}

export default Input;
