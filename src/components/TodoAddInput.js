import React, { Component } from "react";
import styled from "styled-components";

const AddInput = styled.input`
  width: 50%;
  height: 1.4rem;
`;

class TodoAddInput extends Component {
  constructor() {
    super();
  }

  render() {
    return <AddInput />;
  }
}

export default TodoAddInput;
