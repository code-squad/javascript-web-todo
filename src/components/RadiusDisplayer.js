import React from "react";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  width: 2rem;
  height: 2rem;
  font-size: 2rem;
  background: rgb(215, 121, 153);
  border-radius: 50%;
`;

export default function Proceeding(props) {
  return <Div>{props.display}</Div>;
}