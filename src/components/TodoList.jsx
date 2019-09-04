import React, { useContext } from "react";
import { TodoContext } from "../provider/ToDoStore";
import styled, { css } from "styled-components";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import propTypes from "prop-types";

const TodoList = ({ onChangeHandler, onDeleteHandler }) => {
  const { todoData, error, loading } = useContext(TodoContext);

  const makeLiData = todos => {
    return todos.map(todo => {
      return (
        <LI onClick={() => onChangeHandler(data)} key={todo.id}>
          {todo.status === "todo" ? todo.title : <del>{todo.title}</del>}
          <IconButton id={todo.id} onClick={e => onDeleteHandler(e, todo)}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </LI>
      );
    });
  };

  const makeLiComponent = todoData => {
    const todos = todoData;
    const isEmpty = !todos.length;

    const result = isEmpty ? <li>없음</li> : makeLiData(todos);
    return result;
  };

  return (
    <>
      {error && <li>네트워크 요청 실패</li>}
      {loading && <li>로딩중...</li>}
      {!error && !loading && makeLiComponent(todoData)}
    </>
  );
};

export default TodoList;

const LI = styled.li`
  font-family: Monospace;
  font-size: 1.4em;
  font-weight: 100;
  height: 2.4em;
`;

TodoList.propTypes = {
  onChangeHandler: propTypes.func,
  onDeleteHandler: propTypes.func
};
