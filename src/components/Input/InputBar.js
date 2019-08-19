import React, { useState } from 'react';
import AddBtn from './AddButton';
import styled from 'styled-components';

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  margin-bottom: 50px;
  background-color: #8ee4af;
  color: #05386b;
  font-weight: bold;
  vertical-align: middle;
  border-radius: 5px;

  label {
    align-items: center;
    margin-left: 10px;
    background-color: transparent;
  }

  input {
    width: 60%;
    height: 2rem;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    padding-left: 10px;
    margin-left: 10px;
  }
`

const InputBar = () => {

  const [term, setTerm] = useState('');

  return (
    <Form>
      <label>할일입력: </label>
      <input type="text" />
      <AddBtn />
    </Form>
  )
}

export default InputBar;