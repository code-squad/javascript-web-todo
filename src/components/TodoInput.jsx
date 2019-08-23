import React, { Component } from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import styled from "styled-components";

class TodoInput extends Component {
  render() {
    return (
      <Wrapper>
        <Input inputType="text" />
        <Button className="" />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border-radius: 8px;
  padding: 1rem 2rem;
  display: flex;
  box-shadow: 2px 3px 8px #8a8a8a;
  margin: 2rem 1rem;
`;

export default TodoInput;
