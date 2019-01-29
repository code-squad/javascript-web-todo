import styled from "styled-components";
import { TodoHeader, TodoInput, TodoList } from "./Lib.components";

const theme = {
  color: {
    highlight: "#0aa",
    highlightReverse: "white",
    background: "lightcyan",
    boxShadow: "#888",
    alert: "#a00"
  }
};

export const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 5% auto 5%;
  grid-template-rows: 10% 15% 15% auto 10%;

  background-color: ${theme.color.background};
  box-shadow: 24px 24px ${theme.color.boxShadow};
  position: absolute;
  left: 20%;
  top: 10%;
  width: 60vw;
  height: 80vh;
  min-height: 64rem;
  max-height: 80rem;
`;

export const StyledTodoHeader = styled(TodoHeader)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  * {
    margin: 1rem auto;
  }
  border-bottom: 1px solid lightgray;
`;

export const StyledTodoInput = styled(TodoInput)`
  display: grid;
  grid-template-columns: auto 20%;
  grid-template-rows: 10% auto 10%;
  column-gap: 1rem;

  input {
    grid-column: 1;
    grid-row: 2;
    font-size: 2rem;
    padding-left: 2rem;
    border: unset;
    outline: 1px solid ${theme.color.highlight};
  }
  button {
    grid-column: 2;
    grid-row: 2;
    background: unset;
    background-color: ${theme.color.highlight};
    border: unset;
    outline: 1px solid ${theme.color.highlightReverse};
    font-size: 2rem;
    color: white;
  }

  grid-column: 2 / 3;
  grid-row: 3 / 4;
`;

export const StyledTodoList = styled(TodoList)`
  border-bottom: 1px solid lightgray;
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-rows: 10% 10% auto;

  grid-column: 2 / 3;
  grid-row: 4;
  font-size: 2rem;

  h2 {
    grid-column: 1;
    grid-row: 2;
  }
  & > button {
    grid-column: 2;
    grid-row: 2;
    background: unset;
    border: 1px solid ${theme.color.highlight};
    font-size: 2rem;
    color: ${theme.color.highlight};
  }
  ul {
    grid-row: 3;
    grid-column: 1 / 3;
  }
`;
