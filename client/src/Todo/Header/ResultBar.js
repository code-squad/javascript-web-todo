import React, { useMemo } from "react";
import { useTodosStateValue } from "../../StateHelper/TodoState";
import Displayer from "../../components/Displayer";
import styled from "styled-components";

const ResultWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function ResultBar() {
  const todos = useTodosStateValue();

  const countStatus = status => {
    return todos.filter(todo => todo.status === status).length;
  };

  const todoCount = countStatus("todo");
  const doneCount = countStatus("done");

  return (
    <ResultWrapper>
      <Displayer
        color={"rgb(210, 209, 221);"}
        status={"todos"}
        display={todoCount}
      />
      <Displayer status={"done"} display={doneCount} />
    </ResultWrapper>
  );
}
