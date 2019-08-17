import React, { useState, useEffect } from "react";

import OutputTable from "./Output/OutputTable";
import InputBar from "./Header/InputBar";
import Loader from "./Loader";
import ResultBar from "./Header/ResultBar";
import { StateProvider } from "./state";

export default function TodoTable() {
  // const [todos, setTodos] = useState([]);
  // const [newTodo, setNewTodo] = useState("");

  const initialState = {
    todos: [
      {
        title: "공부하기",
        id: 1233,
        status: "todo"
      },
      {
        title: "스터디준비",
        id: 1234,
        status: "todo"
      },
      {
        title: "알고리즘공부",
        id: 1230,
        status: "todo"
      },
      {
        title: "컴퓨터게임",
        id: 1231,
        status: "todo"
      }
    ],
    newTodo: ""
  };

  const todosReducer = (state, action) => {
    // console.log("state & action", state, action);

    

    switch (action.type) {
      case "add":
        const newTodoObj = {
          title: action.title,
          id: action.id,
          status: "todo"
        };
        return {
          todos: [...state.todos, newTodoObj],
          newTodo: ""
        };
      case "delete":
        const remaindedTodos = state.todos.filter(todo => todo.id !== action.id);
        return {
          ...state,
          todos: remaindedTodos
        };
      case "changeInput":
        return {
          ...state,
          newTodo: action.newTodo
        };
      case "changeStatus":
        // index를 찾고
        const index = state.todos.findIndex(todo=>todo.id === action.id);
        // 전체 todos중에서 바꾸고 싶은 todo만 선택한다.
        const selected = state.todos[index];
        // 바꿀 todos를 복사를 먼저 떠두고
        const nextTodos = [... state.todos];
        // 바꾸고 싶은 todo에 selected를 먼저 깔고, 그다음에 덮어쓴다. 
        
        // selected의 status에 따라 넘어온게 todo면 done으로 done이면 todo로 바꿈
        const statusToggle = (status)=>{
          return status === "todo" ? "done" : "todo"
        }
        nextTodos[index] = {
          ...selected,
          status: statusToggle(selected.status)
        }
        
        return {
          ...state,
          todos: nextTodos
        };

      default:
        return state;
    }
  };

  // useEffect(() => {
  //   fetchInitialData(
  //     "https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist"
  //   );
  // }, []);

  // const fetchInitialData = async url => {
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     if (data.statusCode === "404")
  //       throw Error("status404 : 잘못된 url로 요청을 보냈습니다.");
  //     setTodos([...data.body]);
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // };

  return (
    <StateProvider initialState={initialState} reducer={todosReducer}>
      <ResultBar />
      <InputBar />
      <OutputTable />
      {/* {todos.length === 0 && <Loader />} */}
      {/* {todos.length !== 0 && (
        <OutputTable
          todoList={todos}
          // deleteTodo={deleteTodo}
        />
      )} */}
    </StateProvider>
  );
}
