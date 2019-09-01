import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SInput = styled.input`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #1976d2;
  margin: 0 1rem;
  padding: 0.25rem 1rem;
  width: 100%;
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

export default React.memo(Input);
