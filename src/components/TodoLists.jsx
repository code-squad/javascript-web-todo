import React, { Component } from "react";
import styled from "styled-components";
import CONFIGS from "../configs/configs.js";
import Button from "../atomicComponents/Button.jsx";
import UL from "../atomicComponents/UL.jsx";

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

class TodoLists extends Component {
  state = {
    btnText: "접기",
    todos: []
  };

  async componentDidMount() {
    const res = await fetch(CONFIGS.url);
    const data = await res.json();
    this.setState({ todos: data.body });
  }

  render() {
    return (
      <Wrapper>
        <Div>할 일 목록</Div>
        <UL contents={this.state.todos} contentKey="title" />
        <ToggleButton>{this.state.btnText}</ToggleButton>
      </Wrapper>
    );
  }
}

export default TodoLists;
