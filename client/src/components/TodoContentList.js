import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TodoContext } from "./TodoContext";
import config from "../config";
import styles from "./styles";

import TodoButton from "./TodoButton";
import Loader from "./Loader";
import RefetchContent from "./RefetchContent";

const ContentUl = styled.ul`
  margin: 1rem 0;
  padding: 0;
`;

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

const TodoContentList = _ => {
  const { todos, dispatch, fetchError } = useContext(TodoContext);
  const removeTodoById = id => dispatch({ type: "DELETE", payload: id });

  const toggleTodoStatus = ({ evt, id }) => {
    if (evt.target.tagName !== "LI") return;
    todos.forEach(todo => {
      if (todo.id === id)
        todo.status = todo.status === "todo" ? "done" : "todo";
    });
    dispatch({ type: "UPDATE", payload: todos });
  };

  return todos ? (
    <ContentUl>
      {todos.map(todo => {
        return (
          <ContentList
            key={todo.id}
            onClick={evt => toggleTodoStatus({ evt, id: todo.id })}
            todoStatus={todo.status}
          >
            {todo.title}
            <TodoButton
              name="X"
              clickHandler={_ => removeTodoById(todo.id)}
              {...styles.TODO_BUTTON_STYLES}
            />
          </ContentList>
        );
      })}
    </ContentUl>
  ) : fetchError ? (
    <RefetchContent />
  ) : (
    <Loader message="Loading..." />
  );
};

TodoContentList.propTypes = {
  fetchUrl: PropTypes.string
};

export default TodoContentList;
