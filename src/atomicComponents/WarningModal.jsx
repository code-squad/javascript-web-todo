import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 50vw;
  height: 10vh;
  border-radius: 3px;
  border: 2px solid palevioletred;
  font-size: 2rem;
  background: white;
`;

const Wrapper = styled.div`
  position: fixed;
  background: black;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
`;

const WarningModal = props => {
  return (
    <>
      <Wrapper />
      <Div>{props.children}</Div>;
    </>
  );
};

export default WarningModal;
