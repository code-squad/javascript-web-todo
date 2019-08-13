import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import RemoveButton from "./TodoButton";
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

const TodoContentList = props => {
  const [todos, setTodos] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorFlag, setErrorFlag] = useState(false);

  useEffect(() => {
    fetch(props.todosUrl)
      .then(data => data.json())
      .then(data => {
        setTodos(data.body);
        setLoaded(true);
      })
      .catch(err => {
        setErrorFlag(true);
        setErrorMessage("서버에서 데이터를 가져오지 못했습니다. :(");
      });
  }, []);

  return loaded ? (
    <ContentUl>
      {todos.map(todo => {
        return (
          <ContentList key={todo.id}>
            {todo.title}
            <RemoveButton
              name="X"
              width="1rem"
              height="1rem"
              borderRadius="50%"
            />
          </ContentList>
        );
      })}
    </ContentUl>
  ) : errorFlag ? (
    <Loader message={errorMessage} />
  ) : (
    <Loader message="Loading..." />
  );
};

TodoContentList.propTypes = {
  fetchUrl: PropTypes.string
};

export default TodoContentList;
