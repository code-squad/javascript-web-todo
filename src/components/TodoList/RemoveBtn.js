import React, { Component } from 'react'
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
`

class RemoveBtn extends Component {
  render() {
    return <Button>X</Button>
  }
}

export default RemoveBtn;