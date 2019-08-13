import React from "react";
import styled from "styled-components";

const Div = styled.div`
  border-radius: 3px;
  border: 2px solid palevioletred;
  font-size: 2rem;
`;

const WarningModal = props => {
  return <Div>{props.children}</Div>;
};

export default WarningModal;
