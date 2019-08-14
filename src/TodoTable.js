import React, { useState, useEffect } from "react";

import OutputTable from "./OutputTable";
import InputBar from "./InputBar";

export default function TodoTable() {
  // useState([]) 아무것도 안들어가있어도 array형은 명시가 되어야함.
  const [todos, setTodos] = useState([]);

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

  const [newTodo, setNewTodo] = useState();

  // onChange 이벤트에 걸리는 핸들러함수, newTodo의 값을 바꿈.
  const changeInputData = ({ target: { value } }) => {
    // 여기서 newTodo를 타이틀 값이 아니라 객체로 만들어서 보내면 안되서
    // addTodo에서 보낸 타이틀 기준으로 만드는것으로 변경
    setNewTodo(value);
  };
  const addTodo = e => {
    e.preventDefault();

    const newTodoObj = {
      title: newTodo,
      id: e.target.dataset.id,
      status: "todo"
    };

    setTodos([...todos, newTodoObj]);
    setNewTodo("");
  };

  console.log("TodoTable is render...", todos);
  return (
    <div>
      <InputBar
        newTodo={newTodo}
        addTodo={addTodo}
        changeInputData={changeInputData}
      />
      <OutputTable todoList={todos} />
    </div>
  );
}
