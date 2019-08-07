import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CONFIGS from "../configs/configs.js";
import Button from "../atomicComponents/Button.jsx";
import UL from "../atomicComponents/UL.jsx";
import WarningModal from "../atomicComponents/WarningModal.jsx";

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
  const [btnText, setBtnText] = useState("접기");
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

  return (
    <Wrapper>
      <Div>할 일 목록</Div>
      <UL contents={todos} contentKey="title" />
      <ToggleButton>{btnText}</ToggleButton>
      <WarningModal visible={warningVisibility}>네트워크 에러가 발생했습니다</WarningModal>
    </Wrapper>
  );
};

export default TodoOutput;
