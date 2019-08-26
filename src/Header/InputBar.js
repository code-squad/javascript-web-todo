import React, { useState } from "react";
import styled from "styled-components";
import nextId from "react-id-generator";
import { useStateValue } from "../StateHelper/TodoState";

const Form = styled.form`
  background: #a6d0d1;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 2rem;
`;

export default function InputBar() {
  const id = nextId();
  const { dispatch } = useStateValue();
  const [newTodo, setNewTodo] = useState("");

  const handleChangeInput = ({ target: { value } }) => {
    setNewTodo(value);
  };

  const handleAddtodo = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      title: newTodo,
      id
    });
    setNewTodo("");
  };

  return (
    <Form>
      <label>할일 입력 : </label>
      <input value={newTodo} onChange={handleChangeInput} />
      <button onClick={handleAddtodo}>등록</button>
    </Form>
  );
}
