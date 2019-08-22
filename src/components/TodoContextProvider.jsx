import React, { useReducer, useState, createContext } from "react";
import CONFIGS from "../configs/configs";
import reducer from "../reducers/Reducer";
import useFetch from "../hooks/useFetch";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [warningVisible, setWarningVisible] = useState(false);

  const loading = useFetch(CONFIGS.url, arg => dispatch({ type: "INIT", payload: arg }), () => setWarningVisible(true));

  return <TodoContext.Provider value={{ loading, warningVisible, todos, dispatch }}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;
