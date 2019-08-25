import React from "react";
import styled from "styled-components";
import config from "../config";
import { BrowserRouter as Router, Link } from "react-router-dom";

const StyledNav = styled.nav`
  background-color: #3398da;

  & a {
    color: white;
    text-decoration: none;
  }
  & a.active {
    text-decoration: underline;
    color: #009;
  }
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0 0.8rem;
  display: flex;
`;

const StyledLi = styled.li`
  list-style: none;
  padding: 1rem 0.5rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const setActiveClass = ({ target }) => {
  const linkNode = target.parentNode;
  const linkNodes = [...linkNode.parentNode.children];

  linkNodes.forEach(node => {
    node.classList.remove("active");
  });
  linkNode.classList.add("active");
};

export default _ => {
  return (
    <StyledNav>
      <StyledUl>
        {config.navList.map(item => {
          const path = `/${item}`;
          return (
            <Link to={path} key={item}>
              <StyledLi onClick={setActiveClass}>{item}</StyledLi>
            </Link>
          );
        })}
      </StyledUl>
    </StyledNav>
  );
};
