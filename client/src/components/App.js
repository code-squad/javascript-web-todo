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
// Style overriding ex) styled(Button) -> 컴포넌트 재사용시

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
