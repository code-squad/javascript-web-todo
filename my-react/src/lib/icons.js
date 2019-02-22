import React from 'react';
import styled from 'styled-components';

export const DeleteIcon = styled(props => (
  <svg
    className={props.className}
    width={props.width}
    height={props.height}
    viewBox={props.viewBox}
  >
    <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
  </svg>
))`
  fill: transparent;
  stroke-linecap: round;
  stroke-width: 0.5rem;
`;

export const CompleteIcon = styled(props => (
  <svg
    className={props.className}
    width={props.width}
    height={props.height}
    viewBox={props.viewBox}
  >
    <path d="M14.1 27.2l7.1 7.2 16.7-16.8" />
  </svg>
))`
  fill: transparent;
  stroke-linecap: round;
  stroke-width: 0.5rem;
`;

export default { DeleteIcon };
