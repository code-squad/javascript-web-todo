import React from "react";
import styled from "styled-components";
import Li from "../atomicComponents/Li.jsx";
import XButton from "../atomicComponents/XButton.jsx";

const StyledLi = styled(Li)`
  text-decoration: ${props => (props.textDeco === "done" ? "line-through" : "none")};
  text-decoration-color: black;
`;

const Ul = styled.ul`
  padding-left: 2rem;
`;

const TodoList = ({ contents, updateStatus, deleteTodo }) => {
  return (
    <Ul>
      {contents.map(v => (
        <StyledLi textDeco={v.status} key={v.id} data-id={v.id} onClick={updateStatus}>
          {v.title}
          <XButton onClick={deleteTodo} />
        </StyledLi>
      ))}
    </Ul>
  );
};

export default TodoList;
