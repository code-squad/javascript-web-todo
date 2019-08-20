import React, { useContext } from 'react';
import Contents from './Contents';
import styled from 'styled-components';
import { TodoContext } from '../TodoStorage';

const Div = styled.div`
  display: ${({ showingBtnTitle }) => showingBtnTitle === 'Show' ? 'none' : 'block'};
  background-color: #8ee4af;
  border-radius: 5px;
  min-height: 400px;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 1.2rem;
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