import React from 'react';

export default function TodoInput({
  className, placeholder, onChange, onSubmit, value,
}) {
  return (
    <form className={className} onSubmit={onSubmit}>
      <input placeholder={placeholder} type="text" onChange={onChange} value={value} />
      <input type="submit" value="Add Item" />
    </form>
  );
}
