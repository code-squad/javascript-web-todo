import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
  position: absolute;
  top: 27%;
  right: 27%;

  button {
    border-radius: 6px;
    border: 2px solid #05386b;
    width: 4rem;
    height: 2rem;
    background-color: transparent;
    font-weight: bold;
    color: #05386b;
    cursor: pointer;
  }
`

const ContentsBtn = () => {
  return (
    <Div>
      <button>Show</button>
    </Div>
  )
}

export default ContentsBtn;