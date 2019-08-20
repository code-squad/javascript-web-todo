import React, { useState } from 'react';
import RemoveBtn from './RemoveBtn';
import styled from 'styled-components'

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


    span {
      font-weight: 550;
    }
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

const ContentsList = ({ title, status, removeTodo, id }) => {

  const [todoStatus, setTodoStatus] = useState(status);

  const removeHandler = (e) => {
    e.preventDefault();
    removeTodo(id);
  }

  const completeTodo = (e) => {
    e.preventDefault();
    const lineThroughList = e.target.closest('li div');
    lineThroughList.classList.toggle('line-through');
    changeStatus(todoStatus);
  }

  const changeStatus = (curStatus) => {
    curStatus === 'TODO' ? setTodoStatus('DONE') : setTodoStatus('TODO');
  }

  return (
    <Li onClick={completeTodo} >
      <div>
        <span>{ title }</span>
        <span>{ todoStatus }</span>
      </div>
      <RemoveBtn removeHandler={ removeHandler } />
    </Li>
  );
}

export default ContentsList;