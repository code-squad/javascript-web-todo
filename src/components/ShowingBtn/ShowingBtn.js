import React, { useContext } from 'react'
import styled from 'styled-components';
import { TodoContext } from '../TodoStorage';

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
    color: ${ ({ btnTitle }) => btnTitle === 'Hide' ? '#05386b' : '#8ee4af'};
    cursor: pointer;
  }
`

const ShowingBtn = () => {
  const { showingBtnTitle, showContents } = useContext(TodoContext);

  return (
    <Div btnTitle={ showingBtnTitle }>
      <button onClick={ showContents }>
        { showingBtnTitle } 
      </button>
    </Div>
  )
}

export default ShowingBtn;