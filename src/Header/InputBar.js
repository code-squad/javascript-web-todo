import React, { useState } from "react";
import styled from "styled-components";
import nextId from "react-id-generator";

const Form = styled.form`
  background: #a6d0d1;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 2rem;
`;

export default function InputBar(props) {
  // {useId} , nextId 차이를 모르겠음.
  const id = nextId();

  const { newTodo, changeInputData, addTodo } = props;

  const handleAddtodo = e => {
    e.preventDefault();
    addTodo(newTodo, id);
  };

  return (
    <Form>
      <label>할일 입력 : </label>
      <input value={newTodo} onChange={changeInputData} />
      <button onClick={handleAddtodo}>등록</button>
    </Form>
  );
}
