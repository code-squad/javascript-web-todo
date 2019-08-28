import React, { useContext, useCallback } from "react";
import styled from "styled-components";
import styleOptions from "./styleOptions";
import config from "../config";

import TodoButton from "./TodoButton";
import { TodoContext } from "./TodoContext";

export default function TodoList({ todos }) {
  const { dispatch } = useContext(TodoContext);
  const toggleTodoStatus = useCallback(({ evt, id }) => {
    if (evt.target.tagName !== "LI") return;

    todos.forEach(todo => {
      if (todo.id === id)
        todo.status = todo.status === "todo" ? "done" : "todo";
    });

    dispatch({ type: "UPDATE", payload: todos });
  }, []);
  const removeTodoById = useCallback(
    id => dispatch({ type: "DELETE", payload: id }),
    []
  );

  return (
    <>
      {todos.map(todo => (
        <ContentList
          key={todo.id}
          onClick={evt => toggleTodoStatus({ evt, id: todo.id })}
          todoStatus={todo.status}
        >
          {todo.title}
          <TodoButton
            name="X"
            clickHandler={_ => removeTodoById(todo.id)}
            {...styleOptions.DELETE_BUTTON}
          />
        </ContentList>
      ))}
    </>
  );
}

const ContentList = styled.li`
  list-style: none;
  padding: 0.5rem;
  width: 94%;
  display: flex;
  justify-content: space-between;
  font-weight: 300;

  &:hover {
    background-color: #eaf5fd;
    cursor: pointer;
  }

  color: ${props =>
    props.todoStatus === "done"
      ? config.doneStatusColor
      : config.todoStatusColor};
  text-decoration: ${props =>
    props.todoStatus === "done"
      ? config.doneTextDecoration
      : config.todoTextDecoration};
`;
