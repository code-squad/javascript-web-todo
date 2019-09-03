import React, { useState, useEffect, useContext } from "react";
import { TodoContext } from "../provider/ToDoStore";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";

const Counter = () => {
  const { todoData, todoCnt, doneCnt } = useContext(TodoContext);

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
