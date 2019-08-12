import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const AddTodo = props => {
  const [inputValue, setInputValue] = useState("");
  const myRef = useRef(null);

  const onChangeHandler = e => {
    setInputValue(e.target.value);
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.onSubmit(inputValue);
        // myRef.value = "";
      }}
    >
      <Header>what is your One Small Step? </Header>
      <Input ref={myRef} onChange={onChangeHandler} type="text" />
      <Button>등록</Button>
    </form>
  );
};

const Header = styled.h1`
  font-family: Monospace;
  text-align: center;
  font-weight: 100;
`;

const Input = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 1px solid black;
  width: 100%;
  height: 2.5em;
  margin-top: 1em;
  text-align: center;
  font-size: 1.2em;
`;

const Button = styled.button`
  background-color: #fbd14b;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  position: relative;
  left: 45%;
  margin-top: 50px;
  width: 7em;
  height: 3em;
`;

export default AddTodo;
