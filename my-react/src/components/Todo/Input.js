import React from 'react';

export default function TodoInput({ className, placeholder }) {
  return (
    <div className={className}>
      <input placeholder={placeholder} type="text" />
      <button type="button">Add Item</button>
    </div>
  );
}
