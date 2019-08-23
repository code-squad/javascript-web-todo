import React, { Component } from "react";
import styled from "styled-components";

class Input extends Component {
  render() {
    const { inputType } = this.props;
    return <StyledInput type={inputType} />;
  }
}

const StyledInput = styled.input`
  border: 1px solid #c5c5c5;
  border-radius: 4px;
  height: 2rem;
  box-sizing: border-box;
  flex: 1;
  margin-right: 0.5rem;
  font-size: 1rem;
  padding-left: 0.5rem;

  &:focus {
    border-color: #0080ff;
    outline: none;
  }
`;

export default Input;
