import React from 'react';
import Contents from './Contents';
import styled from 'styled-components';

const Div = styled.div`
  display: ${props => props.showingBtnTitle === 'Show' ? 'none' : 'block'};
  background-color: #8ee4af;
  border-radius: 5px;
  min-height: 400px;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 1.2rem;
`

const TodoList = ({ myTodo, removeTodo, showingBtnTitle }) => {
  return (
    <Div showingBtnTitle={ showingBtnTitle }>
      <Contents 
        myTodo={ myTodo } 
        removeTodo={ removeTodo } 
      />
    </Div>
  );
}

export default TodoList;