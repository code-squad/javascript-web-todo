import React from 'react';
import styled from 'styled-components';

function TodoHeader({ className, children }) {
  return <header className={className}>{children}</header>;
}

const StyledTodoHeader = styled(TodoHeader)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  * {
    margin: 1rem auto;
  }
  border-bottom: 1px solid lightgray;
`;

export default StyledTodoHeader;
