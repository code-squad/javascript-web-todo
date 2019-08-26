import React, { useState, useEffect } from "react";
import RadiusDisplayer from "../components/Displayer";
import styled from "styled-components";
import { useStateValue } from "../StateHelper/TodoState";

const ResultWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function ResultBar() {
  const { state, isLoading } = useStateValue();
  const [todoCnt, setTodoCnt] = useState(0);
  const [doneCnt, setDoneCnt] = useState(0);

  // 조건부로 state.todos가 들어왔을때 바꿔주는 로직이 아님
  // state.todos가 fetch되었을때도 todoCnt와 doneCnt가 바뀌지만
  // state.todos가 변경이있을때마다 Cnt의 값을 계산하는 로직
  const calcStatusCnt = todos => {
    const todoArr = todos.filter(todo => todo.status === "todo");
    const doneArr = todos.filter(todo => todo.status === "done");

    setTodoCnt(todoArr.length);
    setDoneCnt(doneArr.length);
  };

  useEffect(() => {
    calcStatusCnt(state.todos);
  }, [state.todos]);

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
