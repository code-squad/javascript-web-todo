import React, { useState, useContext } from 'react';
import AddBtn from './AddButton';
import styled from 'styled-components';
import { TodoContext } from '../../TodoStorage';

const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #8ee4af;
  color: #05386b;
  vertical-align: middle;

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

const InputBox = () => {
  const { dispatch } = useContext(TodoContext);
  const [term, setTerm] = useState('');

  const setCurVal = ({ target }) => {
    const { value } = target;
    setTerm(value);
  }

  const submitHandler = e => {
    e.preventDefault();
    if(!term) return;
    dispatch({ type: 'ADD_TODOITEMS', payload: term })
    setTerm('');
  }

  return (
    <Form onSubmit={ submitHandler }>
      <label>할일입력: </label>
      <input type="text" onChange={ setCurVal } value={ term } />
      <AddBtn />
    </Form>
  )
}

export default InputBox;