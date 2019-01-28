import React, { Component } from "react";
import styled from "styled-components";
import { TodoInput, TodoList } from "./components";

const StyledMain = styled.main`
  background-color: white;
  position: absolute;
  left: 10%;
  top: 10%;
  width: 80vw;
  outline: 1px solid indigo;
  height: 80vh;
`;

class App extends Component {
  render() {
    return (
      <StyledMain>
        <TodoInput />
        <TodoList />
      </StyledMain>
    );
  }
}

export default App;
