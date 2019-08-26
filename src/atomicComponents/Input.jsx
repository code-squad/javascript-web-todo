import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SInput = styled.input`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1rem;
  padding: 0.25rem 1rem;
  width: 25rem;
  height: 3.5rem;
`;

const Input = props => {
  return <SInput {...props} />;
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
