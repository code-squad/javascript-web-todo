import React from "react";

import TodoList from "./Todo/TodoList";
import InputBar from "./Header/InputBar";
import ResultBar from "./Header/ResultBar";
import { StateProvider } from "./StateHelper/TodoState";

export default function TodoApp() {
  return (
    <StateProvider>
      <ResultBar />
      <InputBar />
      <TodoList />
    </StateProvider>
  );
}
