import React, { useCallback } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  button {
    border-radius: 6px;
    border: 2px solid #05386b;
    width: 4rem;
    height: 2rem;
    background-color: ${({ btnTitle }) => btnTitle === 'Hide' ? 'transparent' : '#05386b'};
    color: ${ ({ btnTitle }) => btnTitle === 'Hide' ? '#05386b' : '#8ee4af'};
    cursor: pointer;
    font-weight: bold;
  }
`

const ShowingBtn = ({ showingBtnTitle, dispatch }) => {
  
  const showContents = useCallback(() => {
    dispatch({ type: 'CHANGE_BTNTITLE' });
  })

  return (
    <Div btnTitle={ showingBtnTitle }>
      <button onClick={ showContents }>
        { showingBtnTitle } 
      </button>
    </Div>
  )
}

ShowingBtn.propTypes = {
  showingBtnTitle: PropTypes.string,
  dispatch: PropTypes.func
}

export default ShowingBtn;