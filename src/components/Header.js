import React, { useContext } from 'react';
import styled from 'styled-components';

import { TodoContext } from '../store/TodoStore';
import Counter from './Counter';

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  text-align: right;
`;

const getLengthByStatus = todos => {
  let todoLength = 0;
  let doneLength = 0;

  todos.forEach(todo => (todo.status === 'todo' ? todoLength++ : doneLength++));

  return { todoLength, doneLength };
};

const Header = () => {
  const { todos, loading } = useContext(TodoContext);
  const { todoLength, doneLength } = getLengthByStatus(todos);

  return (
    <Wrapper>
      <Counter color={'#27ae60'} status={'todo'} loading={loading ? 1 : 0}>
        {todoLength}
      </Counter>
      <Counter color={'#c1adae'} status={'done'} loading={loading ? 1 : 0}>
        {doneLength}
      </Counter>
    </Wrapper>
  );
};

export default Header;
