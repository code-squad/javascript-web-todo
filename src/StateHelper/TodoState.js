import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect
} from "react";
import todosReducer from "./todoReducer";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(todosReducer, { todos: [] });

  const initTodoData = todos => {
    dispatch({ type: "INIT_TODO", todos });
  };

  useEffect(() => {
    fetchInitialData(API_URL);
  }, []);

  const fetchInitialData = async url => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.statusCode === "404")
        throw Error("status404 : 잘못된 url로 요청을 보냈습니다.");
      initTodoData([...data.body]);
      setIsLoading(false);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <StateContext.Provider value={{ state, dispatch, isLoading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => {
  return useContext(StateContext);
};
