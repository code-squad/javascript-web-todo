import React from 'react';
import styled from 'styled-components';
import StatusCounter from './StatusCounter';

const StatusCounterBoard = styled((props) => {
  const { todoData, className } = props;
  const countNumOfStatus = statusName => todoData.filter(task => task.status === statusName).length;

  return (
    <div className={className}>
      <StatusCounter
        className="todoCounter"
        statusType="todo"
        count={countNumOfStatus('TODO')}
        color="#0aa"
      />
      <StatusCounter
        className="doneCounter"
        statusType="done"
        count={countNumOfStatus('DONE')}
        color="lightgray"
      />
    </div>
  );
})`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  font-size: 1.5rem;

  .todoCounter {
    grid-column: 1;
    border-radius: 1rem 0 0 1rem;
    border: 1px solid gray;
    margin-left: 5%;
    border-right: none;
  }
  .doneCounter {
    grid-column: 2;
    border-radius: 0 1rem 1rem 0;
    border: 1px solid gray;
    margin-right: 5%;
  }
`;

export default StatusCounterBoard;
