import styled from 'styled-components';
import Todo from '../../components/Todo';

const StyledTodoItem = styled(Todo.Item)`
  display: grid;
  grid-template-columns: auto 10%;
  grid-template-rows: 10% auto 10%;
  padding: 1rem;
  margin: 1rem auto;
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
