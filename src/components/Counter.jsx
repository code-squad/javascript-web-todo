import React, { useState, useEffect } from "react";
import Fab from "@material-ui/core/Fab";

const Counter = props => {
  const [todoCnt, setTodoCnt] = useState(0);
  const [doneCnt, setDoneCnt] = useState(0);

  const classify = data => {
    const rawData = data;
    if (rawData.length !== 0) {
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
      <Fab color="primary">{todoCnt}</Fab>
      <Fab color="secondary">{doneCnt}</Fab>
    </React.Fragment>
  );
};

export default Counter;
