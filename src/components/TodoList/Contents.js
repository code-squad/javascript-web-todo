import React, { useState } from 'react';
import ContentsList from './ContentsList';
import styled from 'styled-components';

const Div = styled.div`
  width: 85%;
  margin: 0 auto;
  color: #05386b;

  p {
    font-weight: bold;
    font-size: 1.8rem;
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`

const Contents = ({ myTodo }) => {

  // const [todo, setTodoList] = useState([]);

  const todoList = myTodo.map( ({ title, id, status }) => {
    return (
      <ContentsList 
        title={title} 
        status={status.toUpperCase()} 
        key={id}
      />
    )
  })
  return (
    <Div>
      <p>Todo</p>
      <ul>
        {myTodo ? todoList : 'Loading....'}
      </ul>
    </Div>
  )
}

export default Contents;