import React, {Component} from 'react';
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
    font-weight: bold;
    color: #05386b;
    cursor: pointer;  
  }
`

class AddBtn extends Component {
  render() {
    return (
      <Div>
        <button type='submit'>Add</button>
      </Div>
    )
  }
}

export default AddBtn;