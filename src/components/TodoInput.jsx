import React from "react";
import styled from "styled-components";
import Button from "../atomicComponents/Button.jsx";
import Input from "../atomicComponents/Input.jsx";

const Form = styled.form`
  display: flex;
`;

const TodoInput = ({ newTodo, onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit} action="/">
      <Input placeholder="할일을 적어주세요" value={newTodo} onChange={onChange} />
      <Button>입력</Button>
    </Form>
  );
};

export default TodoInput;
