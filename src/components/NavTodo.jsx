import React, { useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Manage from "./Manage";
import About from "./About";

export default function NavTodo() {
  return (
    <BrowserRouter>
      <NavUl>
        <NavLi>
          <Link to="/">HOME</Link>
        </NavLi>
        <NavLi>
          <Link to="/manage">MANAGE</Link>
        </NavLi>
        <NavLi>
          <Link to="/about">ABOUT</Link>
        </NavLi>
      </NavUl>

      <Route exact path="/" component={Home} />
      <Route path="/manage" component={Manage} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

const NavUl = styled.ul`
  height: 15%;
  margin: 2rem;
  display: flex;
  justify-content: space-around;
  font-size: 1.6rem;
`;

const NavLi = styled.li`
  display: inline-block;
`;

const A = styled.a`
  text-decoration: none;
  color: black;

  :hover {
    border-bottom: 1px solid #30a9de;
  }
`;
