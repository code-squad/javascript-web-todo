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
  // 어짜피 todoReducer에서 state관리를 할건데 useState가 필요할까?
  //// 그렇다. setTodos가 아닌 initTodoDat를 하면된다.
  // const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // useReducer함수의 initArg는 변하지 않지만 state는 바뀌게 할 수 있다.
  const [state, dispatch] = useReducer(todosReducer, { todos: [] });
  console.log("state 확인용", state);

  const initTodoData = todos => {
    dispatch({ type: "INIT_TODO", todos });
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
