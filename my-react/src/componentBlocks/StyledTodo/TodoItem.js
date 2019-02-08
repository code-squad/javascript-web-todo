import styled from 'styled-components';
import Todo from '../../componentAtoms/TodoAtoms';

const StyledTodoItem = styled(Todo.Item)`
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-rows: 10% 80% 10%;
  padding: 1rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  background-color: white;

  span {
    grid-column: 1;
    grid-row: 2;
  }
  button {
    grid-column: 2;
    grid-row: 2;
    color: red;
    border: none;
    background: none;
    font-size: 2rem;
  }
`;

export default StyledTodoItem;
