import React, { useState, useEffect, useReducer } from "react";
import styled, { createGlobalStyle } from "styled-components";
import CONFIGS from "../configs/configs.js";
import TodoInput from "./TodoInput.jsx";
import TodoOutput from "./TodoOutput.jsx";
import WarningModal from "../atomicComponents/WarningModal.jsx";
import TodoContext from "./TodoContext.jsx";
import reducer from "./Reducer.js";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;
`;

const App = () => {
  const [warningVisible, setWarningVisible] = useState(false);
  //TODO: Context 컴포넌트로 분리하기
  const [todos, dispatch] = useReducer(reducer, []);

  //TODO: useFetch hook으로 바꾸기
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(CONFIGS.url);
        if (!res.ok) throw Error(`STATUS CODE : ${res.status}`);
        if (res instanceof Promise) throw Error("REQUEST FAILED");
        const data = await res.json();
        dispatch({ type: "INIT", payload: data.body });
      } catch (err) {
        console.error(err);
        setWarningVisible(true);
      }
    })();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>Todo App</Title>
        <TodoContext.Provider value={{ todos, dispatch }}>
          <TodoInput />
          <TodoOutput />
        </TodoContext.Provider>
        {warningVisible && <WarningModal>네트워크 에러가 발생했습니다</WarningModal>}
      </Wrapper>
    </>
  );
};

export default App;
