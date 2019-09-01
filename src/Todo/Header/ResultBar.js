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
    // console.log(
    //   status,
    //   todos.filter(todo => todo.status === status).length,
    //   "status를 비교하는 중!"
    // );
    return todos.filter(todo => todo.status === status).length;
  };

  // counStatus 안에 console을 넣고 확인해보면 4,0일때도 isLoading때문에 두번랜더링이됨
  // useMemo로 해결할것이 아니라, TodoStatus를 바꿔야하는거 아닐까?
  
  // 일단 useMemo 써보고 생각해보자. -> useMemo를 쓰니까 4,0이 두번바뀌진 않았다.
  // 여기에 useMemo를 써서 4,0이 두번나오는걸 한번만 나오도록 할 수 있지만.. 그건 반복될때 무시하는 맥락이지
  // 애초에 4,0을 한번만 나오도록 TodoState에서 value들을 다른 ContextProvider에 담기도록 쪼개버리면 된다.  
  const todoCount = countStatus("todo");
  const doneCount = countStatus("done");

  // 여기 필요없음.
  // const todoCount = useMemo(()=>countStatus("todo"),[todos]);
  // const doneCount = useMemo(()=>countStatus("done"),[todos]);



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
