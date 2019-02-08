import styled from 'styled-components';
import Todo from '../../componentAtoms/TodoAtoms';

const StyledTodoHeader = styled(Todo.Header)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  * {
    margin: 1rem auto;
  }
  border-bottom: 1px solid lightgray;
`;

export default StyledTodoHeader;
