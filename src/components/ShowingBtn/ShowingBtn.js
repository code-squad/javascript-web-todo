import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  top: 50px;
  left: 420px;

  button {
    border-radius: 6px;
    border: 2px solid #05386b;
    width: 4rem;
    height: 2rem;
    background-color: ${({ btnTitle }) => btnTitle === 'Hide' ? 'transparent' : '#05386b'};
    font-weight: bold;
    color: ${({ btnTitle }) => btnTitle === 'Hide' ? '#05386b' : 'white'};
    cursor: pointer;
  }
`

const ShowingBtn = ({ btnTitle, clickHandler }) => {
  debugger;
  return (
    <Div btnTitle={ btnTitle }>
      <button 
        onClick={ clickHandler }
      >
        { btnTitle } 
      </button>
    </Div>
  )
}

export default ShowingBtn;