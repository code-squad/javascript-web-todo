import React, {Component} from 'react';
import InputBar from './InputBar';
import AddBtn from './AddButton';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  margin-bottom: 50px;
  background-color: #8ee4af;
  color: #05386b;
  font-weight: bold;
  vertical-align: middle;
  border-radius: 5px;
`

class Input extends Component {
  render() {
    return (
      <Div>
        <span>할일입력: </span>
        <InputBar />
        <AddBtn />
      </Div>
    )
  }
}

export default Input;