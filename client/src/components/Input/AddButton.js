import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  background-color: transparent;

  button {
    border-radius: 6px;
    border: 2px solid #05386b;
    width: 4rem;
    height: 2rem;
    background-color: transparent;
    color: #05386b;
    font-weight: bold;
    cursor: pointer;  
  }
`

const AddBtn = () => {
  return (
    <Div>
      <button type='submit'>Add</button>
    </Div>
  )
}

export default AddBtn;