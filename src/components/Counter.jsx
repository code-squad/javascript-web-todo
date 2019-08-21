import React, { useState, useEffect, useContext } from "react";
import { ToDoContext } from "./ToDoApp";
import Fab from "@material-ui/core/Fab";

const Counter = () => {
  const [todoCnt, setTodoCnt] = useState(0);
  const [doneCnt, setDoneCnt] = useState(0);

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
    classify(props.data);
  });

  return (
    <React.Fragment>
      진행 중 :<Fab color="primary">{todoCnt}</Fab>
      완료 : <Fab color="secondary">{doneCnt}</Fab>
    </React.Fragment>
  );
};

export default Counter;
