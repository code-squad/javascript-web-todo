import React from 'react';
import styled from 'styled-components';
import { useTodoContext } from '../context/TodoContextProvider';
import CONFIGS from '../configs/configs';
const { MAIN_COLOR } = CONFIGS;

const Welcome = () => {
  const { todoCount, doneCount } = useTodoContext();
  return (
    <>
      <Typography>반갑습니다.</Typography>
      <Typography>할일관리 애플리케이션입니다.</Typography>
      <Typography>
        현재 해야 할 일이 <TextHighlight>{todoCount}</TextHighlight>개,
      </Typography>
      <Typography>
        완료된 일이 <TextHighlight>{doneCount}</TextHighlight>개 있습니다.
      </Typography>
    </>
  );
};

export default Welcome;

const Typography = styled.div`
  font-size: 4.5rem;
  font-weight: bold;
  line-height: 7.5rem;
`;

const TextHighlight = styled.span`
  color: ${MAIN_COLOR};
`;
