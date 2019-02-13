import React from 'react';
import styled from 'styled-components';
import { DeleteIcon } from '../../lib/icons';

function TodoItem({ todoTitle, className, onClick }) {
  return (
    <li className={className}>
      <span>{todoTitle}</span>
      <button onClick={onClick} type="button">
        <DeleteIcon height="20" width="20" viewBox="5 5 30 30" />
      </button>
    </li>
  );
}

const StyledTodoItem = styled(TodoItem)`
  display: grid;
  grid-template-columns: 85% 15%;
  grid-template-rows: 10% 80% 10%;
  padding: 1rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  background-color: white;

  span {
    grid-column: 1;
    grid-row: 2;
  }
  button {
    grid-column: 2;
    grid-row: 2;
    color: red;
    border: none;
    background: none;
    font-size: 2rem;
    line-height: 100%;
    border-radius: 50px;
    transition: all 0.2s;

    &:hover,
    &:active {
      background-color: red;
      color: white;

      svg {
        stroke: white;
      }
    }
  }
`;

export default StyledTodoItem;
