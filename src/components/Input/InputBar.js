import React, {Component} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 30px;
  background-color: transparent;
`

const Input = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  padding-left: 10px;
`;

class InputBar extends Component {
  render() {
    return(
      <Div>
        <Input type="text"/>
      </Div>
    )
  }
}

export default InputBar;