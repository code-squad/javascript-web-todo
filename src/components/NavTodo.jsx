import React, { useState } from "react";
import styled from "styled-components";

export default function NavTodo() {
  return (
    <NavUl>
      <NavLi>
        <A href="http://localhost:8080/home">HOME</A>
      </NavLi>
      <NavLi>
        <A href="http://localhost:8080/manage">MANAGE</A>
      </NavLi>
      <NavLi>
        <A href="http://localhost:8080/about">ABOUT</A>
      </NavLi>
    </NavUl>
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
