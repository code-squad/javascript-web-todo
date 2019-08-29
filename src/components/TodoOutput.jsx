import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Button from "../atomicComponents/Button";
import TodoList from "./TodoList";
import PropTypes from "prop-types";

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

  const toggleLists = useCallback(() => {
    setListVisible(!listVisible);
  }, [listVisible]);

  return (
    <Wrapper>
      <Div>할 일 목록</Div>
      <ToggleButton onClick={toggleLists}>{listVisible ? "접기" : "펼치기"}</ToggleButton>
      {listVisible && <TodoList />}
    </Wrapper>
  );
};

ToggleButton.propTypes = {
  onClick: PropTypes.func
};

export default TodoOutput;
