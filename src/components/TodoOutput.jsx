import React, { useState } from "react";
import styled from "styled-components";
import Button from "../atomicComponents/Button";
import TodoList from "./TodoList";

const Wrapper = styled.div`
  position: relative;
  padding: 1.5rem;
  width: 50rem;
`;

const Div = styled.div`
  padding-left: 2rem;
  color: palevioletred;
  font-size: 2rem;
  font-weight: bold;
`;

const ToggleButton = styled(Button)`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
`;

const TodoOutput = () => {
  const [listVisible, setListVisible] = useState(true);

  const toggleLists = () => {
    setListVisible(!listVisible);
  };

  return (
    <Wrapper>
      <Div>할 일 목록</Div>
      {listVisible && <TodoList />}
      <ToggleButton onClick={toggleLists}>{listVisible ? "접기" : "펼치기"}</ToggleButton>
    </Wrapper>
  );
};

export default TodoOutput;
