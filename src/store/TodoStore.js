import React, { useState, useReducer } from 'react';
import { todoReducer } from '../reducer';
import useFetch from '../hooks/useFetch';

export const TodoContext = React.createContext();

const TodoStore = ({ children }) => {
  const [error, setError] = useState('');
  const [todos, dispatch] = useReducer(todoReducer, [{ title: '', id: '', status: 'todo' }]);

  const todoInitFn = data => dispatch({ type: 'INIT', payload: data });

  const loading = useFetch({
    fn: todoInitFn,
    errorFn: setError,
    url: 'http://localhost:3000/todos'
  });

  return (
    <TodoContext.Provider value={{ todos, dispatch, error, loading }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoStore;
