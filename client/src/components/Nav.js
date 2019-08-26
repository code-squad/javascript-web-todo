import React from "react";
import styled from "styled-components";
import config from "../config";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

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

export default _ => {
  return (
    <StyledNav>
      <StyledUl>
        {config.navList.map(item => {
          const path = item === "Home" ? `/` : `/${item}`;
          const navLinkOptions = {
            exact: path === "Home" ? true : null,
            activeClassName: "active",
            key: item,
            to: path
          };
          return (
            <NavLink {...navLinkOptions}>
              <StyledLi>{item}</StyledLi>
            </NavLink>
          );
        })}
      </StyledUl>
    </StyledNav>
  );
};
