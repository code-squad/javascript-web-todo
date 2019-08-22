import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../state";

const Span = styled.span`
  height: 2rem;
  line-height: 2rem;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  ${({ isClicked }) =>
    isClicked &&
    css`
      text-decoration: line-through;
      color: #adb5bd;
    `}
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
`;

export default function TodoItem(props) {
  const [{ todos }, dispatch] = useStateValue();
  const [isClicked, setIsClicked] = useState(false);

  const { title, id } = todos.find((todo, idx) => idx === props.idx);

  const handleDeleteTodo = () => {
    dispatch({ type: "DELETE_TODO", id });
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    dispatch({ type: "CHANGE_TODO_STATUS", id });
  };

  return (
    <>
      <li>
        <Span onClick={handleClick} isClicked={isClicked}>
          {title}
        </Span>
        <StyledFontAwesomeIcon icon={faTimes} onClick={handleDeleteTodo} />
      </li>
    </>
  );
}
