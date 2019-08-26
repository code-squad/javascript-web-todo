import React from "react";
import styled from "styled-components";
import Button from "../atomicComponents/Button";
import Input from "../atomicComponents/Input";
import { useTodoContext } from "./TodoContextProvider";
import useInput from "../hooks/useInput";

const Form = styled.form`
  display: flex;
`;

const TodoInput = () => {
  const { dispatch } = useTodoContext();
  const [state, handleChange, restore] = useInput();
  const { todoInput } = state;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: todoInput });
    restore("todoInput");
  };

  return (
    <Form onSubmit={handleSubmit} action="/">
      <Input placeholder="할일을 적어주세요" name="todoInput" value={todoInput} onChange={handleChange} />
      <Button>입력</Button>
    </Form>
  );
};

export default TodoInput;
