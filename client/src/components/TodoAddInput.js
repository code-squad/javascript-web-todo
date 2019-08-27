import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TodoAddInput = ({ onChange }) => {
  return <AddInput onChange={onChange} />;
};

TodoAddInput.propTypes = {
  onChange: PropTypes.func
};

const AddInput = styled.input`
  width: 50%;
  height: 1.4rem;
`;

export default TodoAddInput;
