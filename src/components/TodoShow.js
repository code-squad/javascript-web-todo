import React, { useState } from 'react';
import styled from 'styled-components';

import TodoList from './TodoList';
import Button from './BasicButton';

const Header = styled.div`
  width: 100%;
  padding: 1rem 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoShow = () => {
  const [folded, setFolded] = useState(false);

  const clickHandler = e => {
    setFolded(!folded);
  };

  return (
    <>
      <Header>
        <h3>해야할 일들</h3>
        <Button onClick={clickHandler}>접기</Button>
      </Header>

      {folded || <TodoList />}
    </>
  );
};

export default TodoShow;
