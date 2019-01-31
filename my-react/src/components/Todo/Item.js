import React from 'react';

export default function TodoItem({ todoTitle, className }) {
  return (
    <li className={className}>
      <span>{todoTitle}</span>
      <button type="button">X</button>
    </li>
  );
}
