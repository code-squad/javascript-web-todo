import React, { Component } from "react";
import styled from "styled-components";

const StyledUL = styled.ul`
  padding-left: 2rem;
  opacity: ${props => props.opacity};
`;

const Li = styled.li`
  margin: 0 1rem;
  padding: 0.25rem 1rem;
  width: 20rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: palevioletred;

  :hover ::after {
    content: "❌";
  }
`;
const getLists = ({ contents, contentKey }) => {
  return contents.map((v, i) => <Li key={v.id || i}>{v[contentKey] || v.title}</Li>);
};

const UL = props => {
  return <StyledUL {...props}>{getLists(props)}</StyledUL>;
};

export default UL;
