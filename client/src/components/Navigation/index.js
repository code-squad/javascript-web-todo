import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  background-color: #05386b;
  margin: 30px auto 0 auto;
  border-radius: 5px 5px 0 0 ;
  overflow: hidden;

  ul {
    display: flex;
    justify-content: space-around;  
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: #8ee4af;
    font-weight: bold;
    font-size: 2rem;
    height: 100%;

    a {
      display: flex;
      justify-content: space-around;
      text-decoration: none;
      align-items: center;
      height: 100%;
      width: 200px;
      cursor: pointer;
    }

    .selected {
      background-color: #8ee4af;
      color: #05386b;
    }
  }
`

//#05386b

const Navigation = () => {
  const navNames = ['Home', 'Todo', 'About'];
  const navList = navNames.map( (name, idx) => {
  const route = name==='Home' ? '/' : '/' + name.toLowerCase();
    return (
      <NavLink to={route} key={idx+1} activeClassName='selected' exact={true}>
        <li>{name}</li>
      </NavLink>
    )
  });

  return (
    <Nav>
      <ul>
        {navList}
      </ul>
    </Nav>
  )
}

export default Navigation;