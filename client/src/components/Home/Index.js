import React, { useContext, useMemo } from 'react';
import { TodoContext } from '../TodoStorage';
import { LOADING } from '../../config';
import styled from 'styled-components';
import { countTodoItems } from '../../myUtil';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;

  h1 {
    font-size: 5rem;
  }

  div {
    font-size: 1.5rem;
  }
`

const Home = () => {
  const { todoData: { todoItems } } = useContext( TodoContext );

  const { numOfTodo, numOfDone } = useMemo(() => countTodoItems(todoItems), [todoItems]);

  const todoSummary = (
    <div>
      <p>해야할 일: { numOfTodo }개 </p>
      <p>완료할 일: { numOfDone }개 </p>
    </div>
  );

  return (
    <Div>
      <h1>TODO</h1>
      { !todoItems.length ? <p>{ LOADING }</p> : todoSummary }
    </Div>
  );
}

export default Home;