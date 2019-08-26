import React, { useState, useEffect, useContext } from "react";
import { TodoContext } from "./ToDoStore";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";

const Counter = () => {
  const [todoCnt, setTodoCnt] = useState(0);
  const [doneCnt, setDoneCnt] = useState(0);
  const { todoData } = useContext(TodoContext);

  const classify = data => {
    const rawData = data;

    if (!!rawData.length) {
      const todoArr = rawData.filter(v => v.status === "todo");
      const doneArr = rawData.filter(v => v.status === "done");

      setTodoCnt(todoArr.length);
      setDoneCnt(doneArr.length);
    }
  };

  useEffect(() => {
    classify(todoData);
  });

  return (
    <>
      <CounterDIV>
        진행 중 :<Fab color="primary">{todoCnt}</Fab>
        완료 : <Fab color="secondary">{doneCnt}</Fab>
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
