import { hot } from 'react-hot-loader/root';
import React from 'react';
import TodoStorage from './TodoStorage';
import TodoApp from './Todo';
import Home from './Home';
import About from './About';
import Nav from './Navigation';
import MainLayout from './Container/MainLayout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Sunflower', sans-serif;
    margin: 0;
    h1 {
      margin: 0;
    }
  }
  #root{
    width: 600px;
    margin: 0 auto;
    background-color: #8ee4af;
    border-radius: 5px;
    color: #05386b;
  }
`

const Main = () => {
  return (
    <Router>
      <>
        <GlobalStyle />
        <Nav />
        <MainLayout>
          <Switch>
            <TodoStorage>
              <Route path={ process.env.PROPER_PATH } exact component={ Home } />
              <Route path={ process.env.PROPER_PATH + 'todo' } component={ TodoApp } />
              <Route path={ process.env.PROPER_PATH + 'about' } component={ About } />
            </TodoStorage>
          </Switch>
        </MainLayout>
      </>
    </Router>
  )
}

export default hot(Main);