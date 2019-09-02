import React, { useContext } from 'react';
import Contents from './Contents';
import styled from 'styled-components';
import { TodoContext } from '../../TodoStorage';

const Div = styled.div`
  display: ${({ showingBtnTitle }) => showingBtnTitle === 'Show' ? 'none' : 'block'};
  font-size: 1.2rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  border-top: solid 3px #05386b;
  height: 100%;
`

const TodoList = () => {
  const { todoData, isFetched } = useContext(TodoContext);
  const { todoItems, showingBtnTitle } = todoData;
  return (
    <Div showingBtnTitle={ showingBtnTitle }>
      <Contents 
        myTodo={ todoItems } 
        isFetched={ isFetched }
      />
    </Div>
  );
}

export default TodoList;