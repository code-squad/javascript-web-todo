import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Button from '../atomicComponents/Button';
import TodoList from './TodoList';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  max-width: inherit;
  min-width: inherit;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem 0;
  }

  h3 {
    padding-left: 2rem;
    font-size: 2rem;
    font-weight: bold;
  }
`;

const TodoOutput = () => {
  const [listVisible, setListVisible] = useState(true);

  const toggleLists = useCallback(() => {
    setListVisible(!listVisible);
  }, [listVisible]);

  return (
    <Wrapper>
      <div>
        <h3>할 일 목록</h3>
        <Button onClick={toggleLists}>{listVisible ? '접기' : '펼치기'}</Button>
      </div>
      {listVisible && <TodoList />}
    </Wrapper>
  );
};

Button.propTypes = {
  onClick: PropTypes.func
};

export default TodoOutput;
