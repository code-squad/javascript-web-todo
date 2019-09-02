import React, { useCallback } from 'react';
import styled from 'styled-components';
import Button from '../atomicComponents/Button';
import Input from '../atomicComponents/Input';
import { useDispatch } from '../context/TodoContextProvider';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: inherit;
  min-width: inherit;
`;

const TodoInput = () => {
  const dispatch = useDispatch();
  const [state, handleChange, restore] = useInput();
  const { todoInput } = state;

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch({ type: 'ADD_TODO', payload: todoInput });
      restore('todoInput');
    },
    [todoInput]
  );

  return (
    <Form onSubmit={handleSubmit} action="/">
      <Input
        placeholder="할일을 적어주세요"
        name="todoInput"
        value={todoInput}
        onChange={handleChange}
      />
      <Button>입력</Button>
    </Form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default TodoInput;
