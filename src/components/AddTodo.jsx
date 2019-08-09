import React, { Component } from "react";
import styled, { css } from "styled-components";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  onChangeHandler(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmit(this.state.inputValue);
        }}
      >
        <Header>what is your One Small Step? </Header>
        <Input onChange={this.onChangeHandler.bind(this)} type="text" />
        <Button>등록</Button>
      </form>
    );
  }
}

const Header = styled.h1`
  font-family: Monospace;
  text-align: center;
  font-weight: 100;
`;

const Input = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 1px solid black;
  width: 800px;
  height: 60px;
  text-align: center;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: #fbd14b;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  width: 100px;
  height: 30px;
  position: relative;
  left: 350px;
  top: 40px;
`;

export default AddTodo;
