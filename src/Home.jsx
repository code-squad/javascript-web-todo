import React from "react";
import { useTodosStateValue } from "./StateHelper/TodoState";
import styled from "styled-components";

const HomeWrapper = styled.div`
  font-size: 1.2rem;
  margin: 0;
  text-align:center;
  p {
    margin: 0;
    span {
      color: hotpink;
    }
  }
  div{
    margin:2rem;
  }
`;

export default function Home() {
  const todos = useTodosStateValue();
  const todoCount = todos.filter(todo => todo.status === "todo").length;
  const doneCount = todos.filter(todo => todo.status === "done").length;

  return (
    <HomeWrapper>
      <div>반갑습니다.할일관리 애플리케이션입니다.</div>
      <p>
        현재 해야 할일이 <span>{todoCount}</span>개,
      </p>
      <p>
        완료된 일이 <span>{doneCount}</span>개 있습니다.
      </p>
    </HomeWrapper>
  );
}
