import React, { useState, useEffect, useContext } from "react";
import { TodoContext } from "./ToDoStore";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";

const Counter = () => {
  const { todoData } = useContext(TodoContext);

  const calTodoCnt = () => {
    const todoArr = todoData.filter(v => v.status === "todo");

    if (!todoArr) return 0;
    return todoArr.length;
  };

  const calDoneCnt = () => {
    const doneArr = todoData.filter(v => v.status === "done");

    if (!doneArr) return 0;
    return doneArr.length;
  };

  return (
    <>
      <CounterDIV>
        진행 중 :<Fab color="primary">{calTodoCnt()}</Fab>
        완료 : <Fab color="secondary">{calDoneCnt()}</Fab>
      </CounterDIV>
    </>
  );
};

export default Counter;

const CounterDIV = styled.div`
  font-family: Monospace;
  font-weight: 300;
  margin-top: 4em;
  text-align: right;
`;
