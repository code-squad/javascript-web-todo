import React, { Component } from "react";
import styled from "styled-components";

import TodoAdd from "./components/TodoAdd";

const StyledRoot = styled.div`
  width: 50%;
  min-width: 300px;
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
      </StyledRoot>
    );
  }
}

export default Root;
