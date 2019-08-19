import React, { useState, useEffect } from 'react';
import InputBar from './Input/InputBar';
import TodoList from './TodoList/TodoList';
import ContentsBtn from './ContentsBtn/ContentsBtn';
import styled from 'styled-components';
import todoApi from '../apis/todoApi';
import { INVALID_DATA, NETWORK_ERROR } from '../message/error';

const Div = styled.div`
  margin: 50px auto;
  width: 50%;
`

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const fetchMyTodoList = async (todoItems) => {
    try {
      const todoJson = await todoApi.get('/develop/todolist');
      const myTodoList = todoJson.data.body;
      setTodoItems([...todoItems, myTodoList]);
    } catch(err) {
      if(err.name === 'typeError') console.log(INVALID_DATA);
      if(err.message === 'Network Error') console.log(NETWORK_ERROR);
    }
  }

  useEffect( () => {
    fetchMyTodoList(todoItems);
  }, [])

  return(
    <Div>
      <InputBar />
      <TodoList myTodo={ todoItems } />
      <ContentsBtn />
    </Div>
  )
}

export default App;