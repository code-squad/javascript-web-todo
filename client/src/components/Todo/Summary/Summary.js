import React, { useContext } from 'react';
import { TodoContext } from '../../TodoStorage';
import ShowingBtn from './ShowingBtn';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 80px;
  background-color: #8ee4af;
  color: #05386b;
  border-top: solid 3px #05386b;
  border-radius: ${({ showingBtnTitle }) => showingBtnTitle === 'Hide' ? 0 : '0 0 5px 5px'};
  padding-left: 10px;
  
  p {
    display: flex;
    align-items: center;
    margin: 0 10px;
  }
`

const Total = styled.p`
  color: #8B0000;
`

const Summary = () => {
  const { todoData } = useContext(TodoContext);
  const { showingBtnTitle, todoItems } = todoData;

  return (
    <Div showingBtnTitle={ showingBtnTitle }>
      <p>남은 할 일: {todoItems.filter(item => item.status === 'todo').length}</p>
      <p>완료 한 일: {todoItems.filter(item => item.status === 'done').length}</p>
      <Total>총 리스트: {todoItems.length}</Total>
      <ShowingBtn />
    </Div>
  )
}

export default Summary;