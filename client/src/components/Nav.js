import React, { useCallback } from "react";
import styled from "styled-components";
import config from "../config";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export default _ => {
  const getNavLinkOptions = useCallback(({ item }) => {
    const path =
      item === "Home"
        ? `${process.env.ACCESS_PATH}`
        : `${process.env.ACCESS_PATH}${item}`;
    console.log(path);
    const obj = {
      activeClassName: "active",
      key: item,
      to: path
    };
    if (path === process.env.ACCESS_PATH) obj.exact = true;
    return obj;
  }, []);

  return (
    <StyledNav>
      <StyledUl>
        {config.navList.map(item => {
          return (
            <NavLink {...getNavLinkOptions({ item })}>
              <StyledLi>{item}</StyledLi>
            </NavLink>
          );
        })}
      </StyledUl>
    </StyledNav>
  );
};

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
