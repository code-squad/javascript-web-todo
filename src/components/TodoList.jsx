import React, { useCallback } from 'react';
import styled from 'styled-components';
import Li from '../atomicComponents/Li';
import XButton from '../atomicComponents/XButton';
import { useTodoContext, useDispatch } from './TodoContextProvider';
import CONFIGS from '../configs/configs';
const { MAIN_COLOR } = CONFIGS;

const StyledLi = styled(Li)`
  text-decoration: ${({ textDeco }) =>
    textDeco === 'done' ? 'line-through' : 'none'};
  text-decoration-color: black;
  color: ${MAIN_COLOR};

  span {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Ul = styled.ul`
  padding-left: 2rem;
`;

const TodoList = () => {
  const { todos } = useTodoContext();
  const dispatch = useDispatch();

  const updateStatus = useCallback(({ target }) => {
    const targetId = Number(target.closest('li').dataset.id);
    dispatch({ type: 'UPDATE_TODO', payload: targetId });
  }, []);

  const deleteTodo = useCallback(e => {
    e.stopPropagation();
    const targetId = Number(e.target.closest('li').dataset.id);
    dispatch({ type: 'DELETE_TODO', payload: targetId });
  }, []);

  return (
    <Ul>
      {todos.map(v => (
        <StyledLi textDeco={v.status} key={v.id} data-id={v.id}>
          <span onClick={updateStatus}>{v.title}</span>
          <XButton onClick={deleteTodo} />
        </StyledLi>
      ))}
    </Ul>
  );
};

export default TodoList;
