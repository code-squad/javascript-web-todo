import React from "react";
import styled from "styled-components";

const AddInput = styled.input`
  width: 50%;
  height: 1.4rem;
`;

const TodoAddInput = props => <AddInput onChange={props.onChange} />;

export default TodoAddInput;
