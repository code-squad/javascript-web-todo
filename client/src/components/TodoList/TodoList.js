import React, { useContext } from 'react';
import Contents from './Contents';
import styled from 'styled-components';
import { TodoContext } from '../TodoStorage';

const Div = styled.div`
  display: ${({ showingBtnTitle }) => showingBtnTitle === 'Show' ? 'none' : 'block'};
  min-height: 400px;
  font-size: 1.2rem;
  padding-top: 2rem;
  background-color: #8ee4af;
  padding-bottom: 1rem;
  border-radius: 0 0 5px 5px;
  border-top: solid 3px #05386b;
`

const TodoList = () => {
  const { todoItems, removeTodo, showingBtnTitle, isFetched } = useContext(TodoContext);
  
  return (
    <Div showingBtnTitle={ showingBtnTitle }>
      <Contents 
        myTodo={ todoItems } 
        removeTodo={ removeTodo } 
        isFetched={ isFetched }
      />
    </Div>
  );
}

export default TodoList;