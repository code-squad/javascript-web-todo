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
    newTodo:""
  };
  console.log("initialState", initialState);

  const todosReducer = (state, action) => {
    console.log("dispatch로 넘겨받은 state,action", state, action);
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
        const remaindedTodo = state.todos.filter(todo => todo.id !== action.id);
        return {
          todos: remaindedTodo
        };
      case "handleChange":
        return {
          ...state,
          newTodo: action.newTodo
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

  // const changeInputData = ({ target: { value } }) => {
  //   setNewTodo(value);
  // };

  // const addTodo = (title, id) => {
  //   const newTodoObj = {
  //     title,
  //     id,
  //     status: "todo"
  //   };

  //   setTodos([...todos, newTodoObj]);
  //   setNewTodo("");
  // };

  // const deleteTodo = id => {
  //   // filter가 best practice일까?
  //   const remaindedTodo = todos.filter(todo => todo.id !== id);
  //   setTodos(remaindedTodo);
  // };

  console.log("TodoTable is render...", initialState.todos);
  console.log("======TodoTable===========");
  return (
    <StateProvider initialState={initialState} reducer={todosReducer}>
      <ResultBar />
      <InputBar
      // newTodo={newTodo}
      // addTodo={addTodo}
      // changeInputData={changeInputData}
      />
      {/* {todos.length === 0 && <Loader />} */}
      {/* {todos.length !== 0 && (
        <OutputTable
          todoList={todos}
          // deleteTodo={deleteTodo}
        />
      )} */}
      <OutputTable
        // todoList={initialState.todos}
        // deleteTodo={deleteTodo}
      />
    </StateProvider>
  );
}
