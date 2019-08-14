import React, { useState } from "react";
import OutputRow from "./OutputRow";
import styled, { css } from "styled-components";

const Background = styled.div`
  background: #a6d0d1;
`;
const Table = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled.ul`
  ${props => !props.isOpened && css`
    display:none;
  `}
`;

export default function OutputTable(props) {
  const { deleteTodo } = props;
  const [isOpened, setIsOpened] = useState(true);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

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
        <button onClick={handleClick}>접기</button>
      </Table>
      <Ul isOpened={isOpened}>{todoList}</Ul>
    </Background>
  );
}
