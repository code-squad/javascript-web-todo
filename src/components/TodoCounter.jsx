import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { TodoContext } from "./TodoContextProvider";
import CONFIGS from "../configs/configs";
import { makeDelay } from "../utils/myUtils";

const { ANIMATE_DURATION } = CONFIGS;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50rem;
  padding: 2rem;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Typography = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid palevioletred;
  width: 5rem;
  height: 5rem;
  font-size: ${props => (props.emphasize === true ? "4rem" : "2rem")};
  transition: all ${ANIMATE_DURATION}ms;
`;

const TodoCounter = () => {
  const { todos } = useContext(TodoContext);
  const [counts, setCounts] = useState({});
  const [emphasize, setEmphasize] = useState(false);
  const { todoCount, doneCount } = counts;

  const updateCount = todos => {
    const todoCount = todos.filter(el => el.status === "todo").length;
    const doneCount = todos.filter(el => el.status === "done").length;
    setCounts({ todoCount, doneCount });
  };

  useEffect(() => {
    (async () => {
      setEmphasize(true);
      updateCount(todos);
      await makeDelay(ANIMATE_DURATION);
      setEmphasize(false);
    })();
  }, [todos]);

  return (
    <Wrapper>
      <Box>
        <Typography>Todo: </Typography>
        <Circle emphasize={emphasize}>{todoCount}</Circle>
      </Box>
      <Box>
        <Typography>Done: </Typography>
        <Circle emphasize={emphasize}>{doneCount}</Circle>
      </Box>
    </Wrapper>
  );
};

export default TodoCounter;
