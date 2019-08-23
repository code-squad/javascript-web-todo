import React, { useState, useEffect } from "react";

import TodoList from "./Todo/TodoList";
import InputBar from "./Header/InputBar";
import Loader from "./Loader";
import ResultBar from "./Header/ResultBar";
import { StateProvider } from "./TodoState";
import todosReducer from "./todoReducer";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  const initialState = {
    todos
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
      <InputBar />
      <TodoList />
    </StateProvider>
  ) : (
    <Loader />
  );
}
