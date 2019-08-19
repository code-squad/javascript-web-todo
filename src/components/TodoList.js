import React, { useContext } from 'react';
import styled from 'styled-components';

import Todo from './Todo';
import { TodoContext } from '../store/TodoStore';

const List = styled.ul`
  padding-left: 2rem;
`;

const TodoList = () => {
  const { todos, dispatch, loading, error } = useContext(TodoContext);

  const removeHandler = id => dispatch({ type: 'DELETE', payload: id });

  const toggleStatus = id => dispatch({ type: 'TOGGLE_STATUS', payload: id });

  const getTodoComponents = todos =>
    todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onRemoveClick={() => removeHandler(todo.id)}
        toggleStatus={() => toggleStatus(todo.id)}
      />
    ));

  if (loading) {
    return '로딩중입니다만...';
  }

  if (!!error) {
    return '=( 에러가 발생했습니다.';
  }

  const todoComponents = getTodoComponents(todos);

  return <List>{todoComponents}</List>;
};

export default TodoList;
