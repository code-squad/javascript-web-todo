import { hot } from 'react-hot-loader/root';
import React from 'react';
import InputBox from './Input/InputBox';
import Summary from './Summary/Summary';
import TodoList from './TodoList/TodoList';
import TodoStorage from './TodoStorage';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Sunflower', sans-serif;
    
    #root {
      margin: 50px auto;
      width: 500px;
      height: 100%;
      font-weight: bold;
    }
  }
`
// Style overriding ex) styled(Button) -> 컴포넌트 재사용시

const App = () => {
  return (
    <TodoStorage>
      <>
        <GlobalStyle />
        <InputBox />
        <Summary />
        <TodoList />
      </>
    </TodoStorage>
  )
}

export default hot(App);
