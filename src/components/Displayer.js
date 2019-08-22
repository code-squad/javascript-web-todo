import React from "react";
import styled, { css } from "styled-components";

const Radius = styled.div`
  text-align: center;
  width: 2rem;
  height: 2rem;
  font-size: 2rem;
  background: ${({ color }) => color || "rgb(215, 121, 153)"};
  border-radius: 50%;
  ${({ status }) => status === "done" && "text-decoration: line-through"}
`;

export default function Displayer({ color, status, display }) {
  return (
    <Radius status={status} color={color}>
      {display}
    </Radius>
  );
}
