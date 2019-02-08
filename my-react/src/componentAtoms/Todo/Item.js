import React from 'react';
import { DeleteIcon } from '../../library/icons';

export default function TodoItem({ todoTitle, className, onClick }) {
  return (
    <li className={className}>
      <span>{todoTitle}</span>
      <button onClick={onClick} type="button">
        <DeleteIcon height="20" width="20" viewBox="5 5 30 30" />
      </button>
    </li>
  );
}
