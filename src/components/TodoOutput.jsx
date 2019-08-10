import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CONFIGS from "../configs/configs.js";
import Button from "../atomicComponents/Button.jsx";
import Li from "../atomicComponents/Li.jsx";
import WarningModal from "../atomicComponents/WarningModal.jsx";
import XButton from "../atomicComponents/XButton.jsx";

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

const Ul = styled.ul`
  padding-left: 2rem;
  opacity: ${props => props.opacity};
`;

const ToggleButton = styled(Button)`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
`;

const TodoOutput = props => {
  const [listVisible, setListVisible] = useState(true);
  const [todos, setTodos] = useState([]);
  const [warningVisibility, setWarningVisibility] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(CONFIGS.url);
        if (!res.ok) throw Error(`STATUS CODE : ${res.status}`);
        if (res instanceof Promise) throw Error("REQUEST FAILED");
        const data = await res.json();
        setTodos(data.body);
      } catch (err) {
        console.error(err);
        setWarningVisibility(true);
      }
    })();
  }, []);

  useEffect(() => {
    const id = 0 | (Math.random() * 9000 + 1000);
    const newTodo = { title: props.newTodo, id, status: "todo" };
    setTodos([...todos, newTodo]);
  }, [props.newTodo]);

  const toggleLists = () => {
    setListVisible(!listVisible);
  };

  return (
    <Wrapper>
      <Div>할 일 목록</Div>
      <Ul opacity={listVisible ? 1 : 0}>
        <Li contents={todos} contentKey="title">
          <XButton />
        </Li>
      </Ul>
      <ToggleButton onClick={toggleLists}>{listVisible ? "접기" : "펼치기"}</ToggleButton>
      <WarningModal visible={warningVisibility}>네트워크 에러가 발생했습니다</WarningModal>
    </Wrapper>
  );
};

export default TodoOutput;
