import React from "react";
import RadiusDisplayer from "../components/RadiusDisplayer";
import styled from "styled-components";
import { useStateValue } from "../state";

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function ResultBar() {
  const [{ todos }, dispatch] = useStateValue();
  const doneCount = todos.filter(todo => todo.status === "done").length;
  const todoCount = todos.filter(todo => todo.status === "todo").length;
  console.log(doneCount, todoCount);

  return (
    <Div>
      <RadiusDisplayer
        color={"rgb(71, 58, 210)"}
        status={"todos"}
        display={todoCount}
      />
      <RadiusDisplayer status={"done"} display={doneCount} />
    </Div>
  );
}
