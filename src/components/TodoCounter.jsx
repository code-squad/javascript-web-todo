import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useTodoContext } from './TodoContextProvider';
import CONFIGS from '../configs/configs';
import { makeDelay } from '../utils/myUtils';

const { ANIMATE_DURATION, MAIN_COLOR } = CONFIGS;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: inherit;
  min-width: inherit;
  padding: 2rem;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Typography = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid ${MAIN_COLOR};
  width: 5rem;
  height: 5rem;
  font-size: ${props => (props.emphasize === true ? '4rem' : '2rem')};
  transition: all ${ANIMATE_DURATION}ms;
`;

const TodoCounter = () => {
  const { todoCount, doneCount } = useTodoContext();
  const [emphasize, setEmphasize] = useState(false);

  useEffect(() => {
    (async () => {
      setEmphasize(true);
      await makeDelay(ANIMATE_DURATION);
      setEmphasize(false);
    })();
  }, [todoCount]);

  return (
    <Wrapper>
      <Box>
        <Typography>Todo: </Typography>
        <Circle emphasize={emphasize}>{todoCount}</Circle>
      </Box>
      <Box>
        <Typography>Done: </Typography>
        <Circle emphasize={emphasize}>{doneCount}</Circle>
      </Box>
    </Wrapper>
  );
};

export default TodoCounter;
