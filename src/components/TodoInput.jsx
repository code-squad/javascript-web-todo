import React, { useState, useContext } from "react";
import styled from "styled-components";
import Button from "../atomicComponents/Button";
import Input from "../atomicComponents/Input";
import TodoContext from "./TodoContext";

const Form = styled.form`
  display: flex;
`;

//컴포넌트의 의존성에 대한 고민.. TodoContext에 의존함
const TodoInput = () => {
  const [newTodo, setNewTodo] = useState();
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: newTodo });
  };

  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  };

  return (
    <Form onSubmit={handleSubmit} action="/">
      <Input placeholder="할일을 적어주세요" value={newTodo} onChange={handleChange} />
      <Button>입력</Button>
    </Form>
  );
};

export default TodoInput;
