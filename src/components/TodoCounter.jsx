import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { TodoContext } from "./TodoContextProvider";

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
  font-size: 2rem;
`;

const TodoCounter = () => {
  const { todos } = useContext(TodoContext);
  const [counts, setCounts] = useState({});
  const { todoCount, doneCount } = counts;

  const updateCount = todos => {
    const todoCount = todos.filter(el => el.status === "todo").length;
    const doneCount = todos.filter(el => el.status === "done").length;
    setCounts({ todoCount, doneCount });
  };

  useEffect(() => {
    updateCount(todos);
  }, [todos]);

  return (
    <Wrapper>
      <Box>
        <Typography>Todo: </Typography>
        <Circle>{todoCount}</Circle>
      </Box>
      <Box>
        <Typography>Done: </Typography>
        <Circle>{doneCount}</Circle>
      </Box>
    </Wrapper>
  );
};

export default TodoCounter;
