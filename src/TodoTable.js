import React, { useState, useEffect } from "react";

import OutputTable from "./OutputTable";
import InputBar from "./InputBar";

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

  const addTodo = (title,id) => {

    const newTodoObj = {
      title,
      id,
      status: "todo"
    };

    setTodos([...todos, newTodoObj]);
    setNewTodo("");
  };

  const deleteTodo = (id) => {
    // 이벤트를 넘기는게 아니라 props로 전달한 값을 넘겨주는 방식 
    console.log('넘겨 받은 ID값은:',id);

  };

  console.log("TodoTable is render...", todos);
  return (
    <div>
      <InputBar
        newTodo={newTodo}
        addTodo={addTodo}
        changeInputData={changeInputData}
      />
      <OutputTable todoList={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
