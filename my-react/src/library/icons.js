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
  stroke: red;
  fill: transparent;
  stroke-linecap: round;
  stroke-width: 0.5rem;
`;

export default { DeleteIcon };
