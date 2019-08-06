import React, { Component } from "react";
import styled from "styled-components";

const LoaderText = styled.h3`
  font-weight: 300;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Loader extends Component {
  render() {
    return <LoaderText>Loading...</LoaderText>;
  }
}

export default Loader;
