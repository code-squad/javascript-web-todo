import React, { Component } from "react";
import styled from "styled-components";

import TodoAdd from "./components/TodoAdd";
import TodoContent from "./components/TodoContent";

const StyledRoot = styled.div`
  width: 480px;
  margin: 0 auto;
  border: 1px dotted red;
`;

class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledRoot>
        <TodoAdd />
        <TodoContent />
      </StyledRoot>
    );
  }
}

export default Root;
