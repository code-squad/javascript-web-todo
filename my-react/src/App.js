import React from 'react';
import StyledTodo from './componentBlocks/StyledTodo';

const App = () => (
  <StyledTodo.Main>
    <StyledTodo.Header>
      <h1>To-Do List</h1>
      <p>Every big dish starts with one small bite</p>
    </StyledTodo.Header>
    <StyledTodo.Input placeholder="Hello, world!" />
    <StyledTodo.List apiURI="http://crong.codesquad.kr:8080/todo" ItemTemplate={StyledTodo.Item} />
  </StyledTodo.Main>
);

export default App;
