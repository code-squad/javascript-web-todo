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
  // {useId} , nextId 차이를 모르겠음.
  const id = nextId();
  // const {changeInputData,newTodo,addTodo } = props;
  // const { changeInputData } = props;
  const [{ todos, newTodo }, dispatch] = useStateValue();
  console.log("useStateValue훅으로 넘겨받은 todos , newTodo", todos, newTodo);
  console.log("=======InputBar=======");

  const handleChangeInput = ({ target: { value } }) => {
    dispatch({
      type: "handleChange",
      newTodo: value
    });
  };

  const handleAddtodo = e => {
    e.preventDefault();
    // addTodo(newTodo, id);
    console.log("dispatch로 보낼 newTodo", newTodo);
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
