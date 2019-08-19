import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.3rem;
  padding-bottom: 1.3rem;
  color: #fff;
  background-color: #ff6b6b;
  border: 1px solid #ee5253;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
    background-color: #ff2121;
  }

  &:focus {
    outline: none;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin: 1rem 0px;
  padding-left: 1rem;
  border: 0.1px solid #cfd6ee;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  &:hover {
    background-color: #f1f3f5;
    cursor: pointer;
  }
`;

const TodoTitle = styled.p`
  text-decoration: ${props => (props.status === 'done' ? 'line-through' : 'none')};
`;

const Todo = ({ title, id, status, onRemoveClick, toggleStatus }) => {
  const confirmDelete = ({ e, title, id }) => {
    e.stopPropagation();

    if (confirm(`${title}을 정말로 삭제하시겠습니까?`)) {
      onRemoveClick(id);
    }
  };

  return (
    <Item data-id={id} onClick={toggleStatus}>
      <TodoTitle status={status}>{title}</TodoTitle>
      <Button onClick={e => confirmDelete({ e, title, id })}>x</Button>
    </Item>
  );
};

export default Todo;
