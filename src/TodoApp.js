import React, { useState, useEffect } from "react";

import TodoList from "./Todo/TodoList";
import InputBar from "./Header/InputBar";
import Loader from "./Loader";
import ResultBar from "./Header/ResultBar";
import { StateProvider } from "./TodoState";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const initialState = {
    todos
  };

  const changeInput = (newTodo) => {
    setNewTodo(newTodo);
  }

  const todosReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        const newTodoObj = {
          title: action.title,
          id: action.id,
          status: "todo"
        };
        return {
          todos: [...state.todos, newTodoObj],
        };
      case "DELETE_TODO":
        const remaindedTodos = state.todos.filter(
          todo => todo.id !== action.id
        );
        return {
          todos: remaindedTodos
        };

      case "CHANGE_TODO_STATUS":
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
          todos: nextTodos
        };

      default:
        return state;
    }
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
      setTodos([...data.body]);
    } catch (error) {
      console.warn(error);
    }
  };

  return initialState.todos.length !== 0 ? (
    <StateProvider initialState={initialState} reducer={todosReducer}>
      <ResultBar />
      <InputBar  newTodo={newTodo} changeInput={changeInput}/>
      <TodoList />
    </StateProvider>
  ) : (
    <Loader />
  );
}
