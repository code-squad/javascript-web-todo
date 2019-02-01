import styled from 'styled-components';
import Todo from '../../components/Todo';
import theme from '../themePalette';

const StyledTodoInput = styled(Todo.Input)`
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
  input[type='submit'] {
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

export default StyledTodoInput;
