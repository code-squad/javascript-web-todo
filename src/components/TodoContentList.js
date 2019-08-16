import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TodoContext } from "./TodoContext";

import TodoButton from "./TodoButton";
import Loader from "./Loader";

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
  }
`;

const TodoContentList = __assign => {
  const { todos, fetchError, refetch } = useContext(TodoContext);

  return todos ? (
    <ContentUl>
      {todos.map(todo => {
        return (
          <ContentList key={todo.id}>
            {todo.title}
            <TodoButton
              name="X"
              width="1rem"
              height="1rem"
              borderRadius="50%"
            />
          </ContentList>
        );
      })}
    </ContentUl>
  ) : fetchError ? (
    <>
      <Loader message={fetchError.message} />
      <TodoButton
        clickHandler={refetch}
        name="Refetch"
        width="4rem"
        height="2rem"
        absolute={true}
        top="3rem"
      />
    </>
  ) : (
    <Loader message="Loading..." />
  );
};

TodoContentList.propTypes = {
  fetchUrl: PropTypes.string
};

export default TodoContentList;
