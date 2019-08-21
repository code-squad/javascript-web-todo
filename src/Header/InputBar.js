import React from "react";
import styled from "styled-components";
import nextId from "react-id-generator";
import { useStateValue } from "../state";

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
  const id = nextId();
  const [{ todos,newTodo }, dispatch] = useStateValue();
  

  const handleChangeInput = ({ target: { value } }) => {
    dispatch({
      type: "changeInput",
      newTodo: value
    });
  };

  const handleAddtodo = e => {
    e.preventDefault();
    dispatch({
      type: "add",
      title: newTodo,
      id
    });
  };
  return (
    <Form>
      <label>할일 입력 : </label>
      <input value={newTodo} onChange={handleChangeInput} />
      <button onClick={handleAddtodo}>등록</button>
    </Form>
  );
}
