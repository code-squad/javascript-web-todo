import React, { useReducer, useState, useContext, createContext } from "react";
import CONFIGS from "../configs/configs";
import reducer from "../reducers/Reducer";
import useFetch from "../hooks/useFetch";

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [warningVisible, setWarningVisible] = useState(false);

  const loading = useFetch(CONFIGS.url, arg => dispatch({ type: "INIT", payload: arg }), () => setWarningVisible(true));

  const todoCount = todos.filter(el => el.status === "todo").length;
  const doneCount = todos.filter(el => el.status === "done").length;

  return (
    <TodoContext.Provider value={{ loading, warningVisible, todos, dispatch, todoCount, doneCount }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
