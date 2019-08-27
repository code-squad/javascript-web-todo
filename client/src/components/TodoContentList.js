import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TodoContext } from "./TodoContext";

import Loader from "./Loader";
import RefetchContent from "./RefetchContent";
import TodoList from "./TodoList";

const TodoContentList = _ => {
  const { todos, fetchError } = useContext(TodoContext);

  return todos ? (
    <ContentUl>
      <TodoList todos={todos} />
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

const ContentUl = styled.ul`
  margin: 1rem 0;
  padding: 0;
`;

export default TodoContentList;
