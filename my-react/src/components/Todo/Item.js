import React from 'react';

export default function TodoItem({ todoTitle, className, onClick }) {
  return (
    <li className={className}>
      <span>{todoTitle}</span>
      <button onClick={onClick} type="button">
        X
      </button>
    </li>
  );
}
