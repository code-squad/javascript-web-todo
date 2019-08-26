import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateHelper/TodoState";
import RadiusDisplayer from "../components/Displayer";
import styled from "styled-components";

const ResultWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function ResultBar() {
  // isLoading이 state.todos로 파악이 가능해서 필요없음.
  const { state } = useStateValue();
  const [todoCnt, setTodoCnt] = useState(0);
  const [doneCnt, setDoneCnt] = useState(0);

  useEffect(() => {
    calcStatusCnt(state.todos);
  }, [state.todos]);

  const calcStatusCnt = todos => {
    const todoArr = todos.filter(todo => todo.status === "todo");
    const doneArr = todos.filter(todo => todo.status === "done");

    setTodoCnt(todoArr.length);
    setDoneCnt(doneArr.length);
  };

  return (
    <ResultWrapper>
      <RadiusDisplayer
        color={"rgb(71, 58, 210)"}
        status={"todos"}
        display={todoCnt}
      />
      <RadiusDisplayer status={"done"} display={doneCnt} />
    </ResultWrapper>
  );
}
