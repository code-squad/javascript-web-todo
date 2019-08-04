import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoInput from "./TodoInput.jsx";
import TodoLists from "./TodoLists.jsx";

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

class App extends Component {
  state = {
    title: "Todo App"
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Wrapper>
          <Title>{this.state.title}</Title>
          <TodoInput />
          <TodoLists />
        </Wrapper>
      </>
    );
  }
}

export default App;
