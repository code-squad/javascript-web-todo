import React, { Component } from "react";
import styled from "styled-components";
import Button from "../atomicComponents/Button.jsx";
import Input from "../atomicComponents/Input.jsx";

const Form = styled.form`
  display: flex;
`;

class TodoInput extends Component {
  render() {
    return (
      <>
        <Form action="/">
          <Input type="text" placeholder="할일을 적어주세요" />
          <Button text="입력" />
        </Form>
      </>
    );
  }
}

export default TodoInput;
