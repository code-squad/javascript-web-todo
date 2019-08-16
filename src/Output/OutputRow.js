import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Li = styled.li`
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

export default function OutputRow(props) {
  const { id, title, deleteTodo } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  const handleClick = () => {
    // toggle
    setIsClicked(!isClicked);
  };

  return (
    <>
      <Li onClick={handleClick} isClicked={isClicked}>
        <span>{title}</span>
        <StyledFontAwesomeIcon icon={faTimes} onClick={handleDeleteTodo} />
      </Li>
    </>
  );
}
