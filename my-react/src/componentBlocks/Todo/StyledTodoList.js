import styled from 'styled-components';
import Todo from '../../components/Todo';
import theme from '../themePalette';

const StyledTodoList = styled(Todo.List)`
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
  .foldBtn {
    grid-column: 2;
    grid-row: 2;
    background: ${props => (props.folded ? theme.color.highlight : 'unset')};
    border: 1px solid ${props => (props.folded ? 'white' : theme.color.highlight)};
    font-size: 2rem;
    text-align: center;
    color: ${props => (props.folded ? 'white' : theme.color.highlight)};
  }
  ul {
    grid-row: 3;
    grid-column: 1 / 3;

    border-bottom: 1px dotted black;

    ${props => (props.folded
    ? `li {
          height: 0;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }
        height: 1rem;
        overflow: hidden;
        margin: 0;
        padding: 0;
        `
    : '')}
  }
`;

export default StyledTodoList;
