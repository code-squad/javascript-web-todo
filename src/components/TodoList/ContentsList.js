import React, { useState } from 'react';
import RemoveBtn from './RemoveBtn';
import styled from 'styled-components'

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4px;
  border-bottom: 2px solid #05386b;
  margin-bottom: 5px;

  div {
    display: flex;
    justify-content: space-between;
    width: 80%;

    span {
      font-weight: 550;
    }
  }
`

const ContentsList = ({ title, status, removeTodo, id }) => {

  const removeHandler = (e) => {
    e.preventDefault();
    removeTodo(id);
  }

  return (
    <Li>
      <div>
        <span>{ title }</span>
        <span>{ status }</span>
      </div>
      <RemoveBtn removeHandler={ removeHandler } />
    </Li>
  );
}

export default ContentsList;