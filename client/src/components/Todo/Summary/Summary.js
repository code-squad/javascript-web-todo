import React, { useMemo, useContext } from 'react';
import { TodoContext } from '../../TodoStorage';
import ShowingBtn from './ShowingBtn';
import styled from 'styled-components';
import { countTodoItems } from '../../../myUtil';

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
  const { todoData, dispatch } = useContext(TodoContext);
  const { showingBtnTitle, todoItems } = todoData;

  // const countTodoItems = (todoItems, status) => todoItems.filter((item) => item.status === status).length;
  const { numOfTodo, numOfDone } = useMemo(() => countTodoItems(todoItems), [todoItems]);
  // const numOfDone = useMemo(() => countTodoItems(todoItems, 'done'), [todoItems]);

  return (
    <Div showingBtnTitle={ showingBtnTitle }>
      <p>해야할 일: { numOfTodo }</p>
      <p>완료한 일: { numOfDone }</p>
      <Total>총 리스트: {todoItems.length}</Total>
      <ShowingBtn
        dispatch = { dispatch }
        showingBtnTitle = { showingBtnTitle }
      />
    </Div>
  )
}

export default Summary;