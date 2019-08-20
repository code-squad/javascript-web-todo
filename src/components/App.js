import React from 'react'
import InputBox from './Input/InputBox';
import TodoList from './TodoList/TodoList';
import ShowingBtn from './ShowingBtn/ShowingBtn';
import styled from 'styled-components';
import TodoStorage from './TodoStorage';

const Div = styled.div`
  margin: 50px auto;
  width: 500px;
`

const App = () => {
  return (
    <TodoStorage>
      <Div>
        <InputBox />
        <ShowingBtn />
        <TodoList />
      </Div>
    </TodoStorage>
  )
}

export default App;
