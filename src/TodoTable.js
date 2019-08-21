import React, { useState, useEffect } from "react";

import OutputTable from "./Output/OutputTable";
import InputBar from "./Header/InputBar";
import Loader from "./Loader";
import ResultBar from "./Header/ResultBar";
import { StateProvider } from "./state";

export default function TodoTable() {
  const [todos, setTodos] = useState([]);

  const initialState = {
    todos,
    newTodo: ""
  };

  const todosReducer = (state, action) => {
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
        const remaindedTodos = state.todos.filter(
          todo => todo.id !== action.id
        );
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
        const index = state.todos.findIndex(todo => todo.id === action.id);
        const selected = state.todos[index];
        const nextTodos = [...state.todos];

        const statusToggle = status => {
          return status === "todo" ? "done" : "todo";
        };

        nextTodos[index] = {
          ...selected,
          status: statusToggle(selected.status)
        };

        return {
          ...state,
          todos: nextTodos
        };

      default:
        return state;
    }
  };

  useEffect(() => {
    fetchInitialData(
      "https://dxvinci.github.io/react-todo/todolist.json"
    );
  }, []);

  const fetchInitialData = async url => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.statusCode === "404")
        throw Error("status404 : 잘못된 url로 요청을 보냈습니다.");
      setTodos([...data.body]);
    } catch (error) {
      console.warn(error);
    }
  };

  return initialState.todos.length !== 0 ? (
    <StateProvider initialState={initialState} reducer={todosReducer}>
      <ResultBar />
      <InputBar />
      <OutputTable />
    </StateProvider>
  ) : (
    <Loader />
  );
}
