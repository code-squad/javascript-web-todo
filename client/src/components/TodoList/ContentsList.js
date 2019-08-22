import React, { useContext } from 'react';
import RemoveBtn from './RemoveBtn';
import styled from 'styled-components';
import { TodoContext } from '../TodoStorage';

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4px;
  border-bottom: 2px solid #05386b;
  margin-bottom: 5px;

  div {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 80%;
    cursor: pointer;
  }
  
  .line-through::before {
    content: " ";
    position: absolute;
    top: 50%;
    left: 0;
    border-bottom: 1px solid #111;
    width: 100%;
  }
`

const ContentsList = ({ title, status, id }) => {
  const { dispatch } = useContext(TodoContext);

  const removeHandler = (e) => {
    dispatch({ type: 'DELETE', payload: id });
  }
  
  const completeTodo = (e) => {
    if(e.target.localName === 'li' || e.target.localName === 'button') return;
    
    const lineThroughList = e.target.closest('li div');
    lineThroughList.classList.toggle('line-through');
    dispatch({ type: 'UPDATE', payload: id })
  }

  return (
    <Li onClick={ completeTodo } >
      <div>
        <span>{ title }</span>
        <span>{ status }</span>
      </div>
      <RemoveBtn removeHandler={ removeHandler } />
    </Li>
  );
}

export default ContentsList;