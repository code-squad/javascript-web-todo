import React, {
  useReducer,
  useState,
  useContext,
  useCallback,
  createContext
} from 'react';
import CONFIGS from '../configs/configs';
import reducer from '../reducers/Reducer';
import useFetch from '../hooks/useFetch';
import PropTypes from 'prop-types';

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [warningVisible, setWarningVisible] = useState(false);

  const initTodo = useCallback(arg => {
    dispatch({ type: 'INIT_TODO', payload: arg });
  }, []);

  const handleError = useCallback(() => {
    setWarningVisible(true);
  }, []);

  const loading = useFetch(CONFIGS.url, initTodo, handleError);

  const todoCount = todos.filter(el => el.status === 'todo').length;
  const doneCount = todos.filter(el => el.status === 'done').length;

  return (
    <TodoContext.Provider
      value={{ loading, warningVisible, todos, dispatch, todoCount, doneCount }}
    >
      {children}
    </TodoContext.Provider>
  );
};

TodoContext.Provider.propTypes = {
  value: PropTypes.shape({
    loading: PropTypes.bool,
    warningVisible: PropTypes.bool,
    todos: PropTypes.array,
    dispatch: PropTypes.func,
    todoCount: PropTypes.number,
    doneCount: PropTypes.number
  })
};

export default TodoContextProvider;
