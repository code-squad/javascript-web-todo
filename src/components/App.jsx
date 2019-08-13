import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import CONFIGS from "../configs/configs.js";
import TodoInput from "./TodoInput.jsx";
import TodoOutput from "./TodoOutput.jsx";
import WarningModal from "../atomicComponents/WarningModal.jsx";

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
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  const [warningVisible, setWarningVisible] = useState(false);

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
        setWarningVisible(true);
      }
    })();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const id = 0 | (Math.random() * 9000 + 1000);
    setTodos([...todos, { title: newTodo, id, status: "todo" }]);
  };

  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>Todo App</Title>
        <TodoInput newTodo={newTodo} onChange={handleChange} onSubmit={handleSubmit} />
        <TodoOutput todos={todos} setTodos={setTodos} />
        {warningVisible && <WarningModal>네트워크 에러가 발생했습니다</WarningModal>}
      </Wrapper>
    </>
  );
};

export default App;
