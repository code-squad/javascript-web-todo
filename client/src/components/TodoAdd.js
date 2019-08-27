import React, { useContext, useState, useCallback } from "react";
import styled from "styled-components";
import styleOptions from "./styleOptions";

import TodoSubtitle from "./TodoSubtitle";
import TodoAddInput from "./TodoAddInput";
import TodoButton from "./TodoButton";
import { TodoContext } from "./TodoContext";
import { useInput } from "../hooks";

export default _ => {
  const { dispatch } = useContext(TodoContext);
  const [inputVal, setInputVal] = useState("");

  const getNewTodoObj = useCallback(
    title => ({ title, id: Date.now(), status: "todo" }),
    []
  );

  const setNewTodo = useCallback(
    _ => {
      if (inputVal === "") return;
      dispatch({ type: "CREATE", payload: getNewTodoObj(inputVal) });
    },
    [inputVal]
  );

  return (
    <StyledDiv className="todo-add">
      <TodoSubtitle subtitle="할 일 입력" />
      <TodoAddInput {...useInput(setInputVal)} />
      <TodoButton
        name="등록"
        clickHandler={setNewTodo}
        {...styleOptions.ADD_BUTTON}
      />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 0.3rem;
`;
