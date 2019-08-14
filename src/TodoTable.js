import React, { useState, useEffect } from "react";

import OutputTable from "./Output/OutputTable";
import InputBar from "./Header/InputBar";
import Loader from "./Loader";
import ResultBar from "./Header/ResultBar";

export default function TodoTable() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  useEffect(() => {
    fetchInitialData(
      "https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist"
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

  const changeInputData = ({ target: { value } }) => {
    setNewTodo(value);
  };

  const addTodo = (title, id) => {
    const newTodoObj = {
      title,
      id,
      status: "todo"
    };

    setTodos([...todos, newTodoObj]);
    setNewTodo("");
  };

  const deleteTodo = id => {
    // filter가 best practice일까?
    const remaindedTodo = todos.filter(todo => todo.id !== id);
    setTodos(remaindedTodo);
  };

  console.log("TodoTable is render...", todos);
  return (
    <div>
      <ResultBar/>
      <InputBar
        newTodo={newTodo}
        addTodo={addTodo}
        changeInputData={changeInputData}
      />
      {todos.length === 0 && <Loader/>}
      {todos.length !== 0 && <OutputTable todoList={todos} deleteTodo={deleteTodo} />}
    </div>
  );
}
