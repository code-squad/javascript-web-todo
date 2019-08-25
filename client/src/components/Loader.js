import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LoaderTitle = styled.h3`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: calc(50% - 1rem);
  font-size: 1.2rem;
  color: red;
  font-weight: 300;
`;

const Loader = ({ message }) => <LoaderTitle>{message}</LoaderTitle>;

Loader.propTypes = {
  message: PropTypes.string.isRequired
};

export default Loader;
