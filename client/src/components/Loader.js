import React from "react";
import styled from "styled-components";

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

const Loader = props => <LoaderTitle>{props.message}</LoaderTitle>;

export default Loader;
