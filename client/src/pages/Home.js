import React, { useContext, useState, useEffect } from "react";
import { getNumOfTodos } from "../utils/utils";
import styled from "styled-components";

import { TodoContext } from "../components/TodoContext";
import Loader from "../components/Loader";

const StyledHome = styled.div`
  width: 100%;
  min-height: 20rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContent = styled.div`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 300;
  padding: 0.5rem;
`;

export default function Home() {
  const { todos } = useContext(TodoContext);
  const [nums, setNums] = useState({ todo: 0, done: 0 });

  useEffect(() => {
    setNums(getNumOfTodos(todos));
  }, [todos]);

  return (
    <StyledHome>
      {todos ? (
        <StyledContent>
          할 일 관리 앱입니다.
          <br />
          <br />
          해야 할 일 {nums.todo}개<br />
          완료한 일이 {nums.done}개 있습니다.
        </StyledContent>
      ) : (
        <Loader message="Loading..." />
      )}
    </StyledHome>
  );
}
