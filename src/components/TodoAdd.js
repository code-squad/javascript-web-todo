import React, { useContext, useState } from "react";
import styled from "styled-components";

import TodoSubtitle from "./TodoSubtitle";
import TodoAddInput from "./TodoAddInput";
import TodoButton from "./TodoButton";
import { TodoContext } from "./TodoContext";
import { useInput } from "../hooks/useInput";

const Add = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 0.3rem;
`;

const TodoAdd = _ => {
  const { todos, setTodos } = useContext(TodoContext);
  const [inputVal, setInputVal] = useState("");

  const getNewTodoObj = title => ({ title, id: Date.now(), status: "todo" });

  const buttonClickHandler = _ => {
    console.log(getNewTodoObj(inputVal));
  };

  return (
    <Add className="todo-add">
      <TodoSubtitle subtitle="할 일 입력" />
      <TodoAddInput {...useInput(setInputVal)} />
      <TodoButton
        name="등록"
        clickHandler={buttonClickHandler}
        width="4rem"
        height="2rem"
      />
    </Add>
  );
};

export default TodoAdd;
