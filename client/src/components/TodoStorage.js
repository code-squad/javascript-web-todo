import React, { useState, useReducer } from 'react';
import useFetch from './helper/useFetch/useFetch';
import { todoReducer } from './helper/reducers/todoReducer';

export const TodoContext = React.createContext();

const TodoStorage = ({ children }) => {
  const [todoItems, dispatch] = useReducer(todoReducer, []);
  const [showingBtnTitle, setShowingBtnTitle] = useState('Hide');
  
  const setInitTodoData = initData => {
    dispatch({ type: "INIT", payload: initData })
  }

  const isFetched = useFetch(setInitTodoData);
  
  const changeShowBtnTitle = showingBtnTitle => {
    showingBtnTitle === 'Show' 
    ? setShowingBtnTitle('Hide')
    : setShowingBtnTitle('Show');
  }
  
  const showContents = () => {
    changeShowBtnTitle(showingBtnTitle);
  }

  return(
    <TodoContext.Provider value={{ todoItems, showingBtnTitle, showContents, dispatch, isFetched }}>
      { children }
    </TodoContext.Provider>
  )
}

export default TodoStorage;