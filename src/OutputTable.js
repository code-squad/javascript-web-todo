import React, { useState } from "react";
import OutputRow from "./OutputRow";
import styled from "styled-components";

const Background = styled.div`
  background: #a6d0d1;
`;
const Table = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function OutputTable(props) {
  const { deleteTodo } = props;

  const todoList = props.todoList.map(todoItem => (
    <OutputRow
      key={todoItem.id}
      id={todoItem.id}
      title={todoItem.title}
      deleteTodo={deleteTodo}
    />
  ));

  console.log("OutputTable is render...");
  return (
    <Background>
      <Table>
        <h3>해야할 일들</h3>
        <button>접기</button>
      </Table>
      <ul>{todoList}</ul>
    </Background>
  );
}
