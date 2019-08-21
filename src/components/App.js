import React from 'react'
import ShowingBtn from './ShowingBtn/ShowingBtn';
import InputBox from './Input/InputBox';
import Summary from './Summary/Summary';
import TodoList from './TodoList/TodoList';
import TodoStorage from './TodoStorage';
import styled from 'styled-components';

const Div = styled.div`
  margin: 50px auto;
  width: 500px;
  height: 100%;
  font-weight: bold;
`

const App = () => {
  return (
    <TodoStorage>
      <Div>
        <ShowingBtn />
        <InputBox />
        <Summary />
        <TodoList />
      </Div>
    </TodoStorage>
  )
}

export default App;
