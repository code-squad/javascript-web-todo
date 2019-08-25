import React from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  width: 100%;
  min-height: 20rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContent = styled.div`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 300;
  padding: 0.5rem;
`;

export default function About() {
  return (
    <StyledAbout>
      <StyledContent>
        Nickname: Gren
        <br />
        Class: Front-end
        <br />
        Github: deveb22@gmail.com
      </StyledContent>
    </StyledAbout>
  );
}
