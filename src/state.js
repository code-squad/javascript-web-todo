import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  console.log("StateProvider로 넘어온 initialState",initialState);
  console.log("value",useReducer(reducer, initialState))
  // 여기서 value를 다시 안만듦. 
  // 내가 느낀건 initialState에 newTodo가 있어서 그런식으로 바뀌면 안될것같아.
  //// initialState는 최초에 한번만 바뀌는것같아. 그래서 useEffect로 initialData가 빈배열에서 4개배열로
  //// 바뀐 이후에는 value가 바뀌지 않는거지. 
  
  // newTodo도 state를 바꾸는건데, todos는 addTodo 로바꾸는데
  // newTodo는 dispatch로 바꾸는게 아니라, 걍 handleChange로 바꾸고 넘기려고 했던게 잘못된거고
  // todoReducer에 type을 새로 만들어주어야함.
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => {
  const [state,dispatch] = useContext(StateContext);
  console.log("넘겨줄 state와 dispatch",state,dispatch);
  console.log('=======state=========')
  // StateProvider에는 바뀐 initialState가 들어오는데, 넘겨줄 useContext에는 바뀐 state가 반영되지 않는다.
  // 위에서 value를 안만드니까 state가 바뀌지 않는것임.. 
  return useContext(StateContext);
};
