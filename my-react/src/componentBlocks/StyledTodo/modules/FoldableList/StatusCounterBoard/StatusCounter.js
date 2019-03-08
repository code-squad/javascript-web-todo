import React from 'react';
import styled from 'styled-components';

const StatusCounter = styled((props) => {
  const { statusType, count, className } = props;

  return (
    <div className={className}>
      <div className="type">{`${statusType}:`}</div>
      <div className="count">
        <span>{`${count}`}</span>
      </div>
    </div>
  );
})`
  display: grid;
  grid-template-columns: 70% 30%;

  background-color: white;
  color: ${({ color }) => color};
  font-weight: bold;

  .type {
    width: 5.5rem;

    grid-column: 1;
    padding: 0 1rem;
  }
  .count {
    width: 2rem;

    grid-column: 2;

    display: grid;
    justify-content: right;

    padding-right: 1rem;
  }
`;

export default StatusCounter;
