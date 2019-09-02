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
const DispatchContext = createContext();

export const useTodoContext = () => useContext(TodoContext);
export const useDispatch = () => {
  const dispatch = useContext(DispatchContext);
  return useCallback(({ type, payload }) => dispatch({ type, payload }), [
    dispatch
  ]);
};

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
      value={{ loading, warningVisible, todos, todoCount, doneCount }}
    >
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
};

TodoContext.Provider.propTypes = {
  value: PropTypes.shape({
    loading: PropTypes.bool,
    warningVisible: PropTypes.bool,
    todos: PropTypes.array,
    todoCount: PropTypes.number,
    doneCount: PropTypes.number
  })
};
DispatchContext.Provider.propTypes = {
  value: PropTypes.func
};

export default TodoContextProvider;
