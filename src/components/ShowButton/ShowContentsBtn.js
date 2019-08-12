import React, { Component } from 'react'
import styled from 'styled-components';

const Div = styled.div`
  position: absolute;
  top: 27%;
  right: 27%;
`

const Button = styled.button`
  border-radius: 6px;
  border: 2px solid #05386b;
  width: 4rem;
  height: 2rem;
  background-color: transparent;
  font-weight: bold;
  color: #05386b;
  cursor: pointer;
`


class ShowContentsBtn extends Component {
  render() {
    return (
      <Div>
        <Button>Show</Button>
      </Div>
    )
  }
}

export default ShowContentsBtn;