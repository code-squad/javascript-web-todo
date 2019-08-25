import React from "react";
import styled from "styled-components";

import Nav from "./Nav";

const StyledLayout = styled.div`
  width: 480px;
  margin: 0 auto;
  border: 1px solid #2196f3;
  border-radius: 0.4rem;
  &,
  & * {
    box-sizing: border-box;
  }

  & a {
    text-decoration: none;
  }
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Nav />
      {children}
    </StyledLayout>
  );
}
