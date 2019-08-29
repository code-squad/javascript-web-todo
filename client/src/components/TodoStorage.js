import React, { useReducer } from 'react';
import useFetch from './helper/useFetch/useFetch';
import { todoReducer } from './helper/reducers/todoReducer';

export const TodoContext = React.createContext();

const TodoStorage = ({ children }) => {
  const initTodoData = { todoItems: [], showingBtnTitle: 'Hide' };
  const [todoData, dispatch] = useReducer(todoReducer, initTodoData);
  
  const setInitTodoData = initData => {
    dispatch({ type: "INIT_TODOITEMS", payload: initData });
  }

  const isFetched = useFetch(setInitTodoData);

  return(
    <TodoContext.Provider value={{ todoData, dispatch, isFetched }}>
      { children }
    </TodoContext.Provider>
  );
}

export default TodoStorage;