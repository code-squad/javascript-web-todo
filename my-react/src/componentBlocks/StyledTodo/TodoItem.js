import React from 'react';
import styled from 'styled-components';
import { DeleteIcon, CompleteIcon } from '../../lib/icons';

function TodoItem({
  todoTitle, className, onDelete, onStatusToggle,
}) {
  return (
    <li className={className}>
      <span>
        {todoTitle}
        {/* span onclick => 타이틀 수정 모드 */}
      </span>
      <button className="completeBtn" onClick={onStatusToggle} type="button">
        <CompleteIcon height="20" width="20" viewBox="10 10 30 30" />
      </button>
      <button className="deleteBtn" onClick={onDelete} type="button">
        <DeleteIcon height="20" width="20" viewBox="5 5 30 30" />
      </button>
    </li>
  );
}

const StyledTodoItem = styled(TodoItem)`
  display: grid;
  grid-template-columns: 86% 7% 7%;
  grid-template-rows: 10% 80% 10%;
  padding: 1rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  background-color: white;
  ${({ status }) => {
    if (status === 'DONE') {
      return `
        color: lightgray;
        text-decoration: line-through;
      `;
    }
    return null;
  }};

  span {
    grid-column: 1;
    grid-row: 2;
  }
  .deleteBtn {
    grid-column: 3;
    grid-row: 2;
    border: none;
    background: none;
    font-size: 2rem;
    line-height: 100%;
    border-radius: 50px;
    transition: all 0.2s;

    svg {
      stroke: red;
    }

    &:hover,
    &:active {
      background-color: red;
      color: white;

      svg {
        stroke: white;
      }
    }
  }
  .completeBtn {
    grid-column: 2;
    grid-row: 2;
    border: none;
    background: none;
    font-size: 2rem;
    line-height: 100%;
    border-radius: 50px;
    transition: all 0.2s;

    stroke: ${({ status }) => (status === 'DONE' ? 'lightgray' : 'green')};

    &:hover,
    &:active {
      background-color: ${({ status }) => (status === 'DONE' ? 'lightgray' : 'green')};
      color: white;

      svg {
        stroke: white;
      }
    }
  }
`;

export default StyledTodoItem;
