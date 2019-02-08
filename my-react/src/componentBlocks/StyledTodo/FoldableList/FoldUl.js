import React from 'react';
import styled from 'styled-components';

const FoldUl = styled(({ className, children }) => <ul className={className}>{children}</ul>)`
  ${props => (props.folded
    ? `& > * {
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
`;

export default FoldUl;
