import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import TodoStore from '../store/TodoStore';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoShow from './TodoShow';

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Conetents = styled.div`
  width: 900px;
  margin: 2rem;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoStore>
        <Wrapper>
          <Header />
          <Conetents>
            <TodoForm />
            <TodoShow />
          </Conetents>
        </Wrapper>
      </TodoStore>
    </>
  );
};

export default App;
