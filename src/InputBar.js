import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  background: #a6d0d1;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 2rem;
  
`;

export default class InputBar extends Component {
  render() {
    console.log("inputBar is render...");
    return (
      <Form>
        <label>할일 입력 : </label>
        <input />
        <button>등록</button>
      </Form>
    );
  }
}
