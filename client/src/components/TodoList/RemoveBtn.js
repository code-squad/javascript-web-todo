import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  border: none;
  border-radius: 50%;
  background-color: #05386b;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 10px;
  cursor: pointer;
`

const RemoveBtn = ({ removeHandler }) => {
  return <Button onClick={ removeHandler }>X</Button>
}

export default RemoveBtn;