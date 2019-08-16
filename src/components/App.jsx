import React, { useState, useReducer } from "react";
import styled, { createGlobalStyle } from "styled-components";
import CONFIGS from "../configs/configs.js";
import TodoInput from "./TodoInput.jsx";
import TodoOutput from "./TodoOutput.jsx";
import WarningModal from "../atomicComponents/WarningModal.jsx";
import TodoContext from "./TodoContext.jsx";
import reducer from "./Reducer.js";
import useFetch from "./useFetch.jsx";

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

const Typography = styled.div`
  font-size: 2rem;
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
  //why? todos를 context컴포넌트로 분리함으로써 context가 store의 역할을 하도록. 지금은 store와 view가 혼재된 느낌
  const [todos, dispatch] = useReducer(reducer, []);

  const loading = useFetch(CONFIGS.url, arg => dispatch({ type: "INIT", payload: arg }), () => setWarningVisible(true));

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>Todo App</Title>
        <TodoContext.Provider value={{ todos, dispatch }}>
          <TodoInput />
          <TodoOutput />
        </TodoContext.Provider>
        {loading && <Typography>로딩중..</Typography>}
        {warningVisible && <WarningModal>네트워크 에러가 발생했습니다</WarningModal>}
      </Wrapper>
    </>
  );
};

export default App;
