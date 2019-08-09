import React, {Component} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  background-color: transparent;
`

const Button = styled.button`
  border-radius: 6px;
  border: 2px solid #05386b;
  width: 4rem;
  height: 2rem;
  background-color: transparent;
  font-weight: bold;
  color: #05386b;
`

class AddBtn extends Component {
  render() {
    return (
      <Div>
        <Button>Add</Button>
      </Div>
    )
  }
}

export default AddBtn;