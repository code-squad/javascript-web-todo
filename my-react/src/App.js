import React, { Component } from "react";
import {
  StyledMain,
  StyledTodoHeader,
  StyledTodoInput,
  StyledTodoList
} from "./App.styled";

class App extends Component {
  render() {
    return (
      <StyledMain>
        <StyledTodoHeader />
        <StyledTodoInput placeholder={`Hello, world!`} />
        <StyledTodoList apiURI={"http://crong.codesquad.kr:8080/todo"} />
      </StyledMain>
    );
  }
}

export default App;
