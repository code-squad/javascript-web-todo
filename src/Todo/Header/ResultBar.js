import React, { useState, useEffect } from "react";
import { useStateValue } from "../../StateHelper/TodoState";
import RadiusDisplayer from "../../components/Displayer";
import styled from "styled-components";

const ResultWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function ResultBar() {
  const {todos} = useStateValue();  

  const todoCount = todos.filter(todo => todo.status === "todo").length;
  const doneCount = todos.filter(todo => todo.status === "done").length;


  return (
    <ResultWrapper>
      <RadiusDisplayer
        color={"rgb(210, 209, 221);"}
        status={"todos"}
        display={todoCount}
      />
      <RadiusDisplayer status={"done"} display={doneCount} />
    </ResultWrapper>
  );
}
