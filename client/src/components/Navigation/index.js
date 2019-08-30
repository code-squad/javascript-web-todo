import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NAV_NAMES } from '../../config';

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  background-color: #05386b;
  margin: 30px auto 0 auto;
  border-radius: 5px 5px 0 0 ;
  overflow: hidden;
  font-weight: bold;

  ul {
    display: flex;
    justify-content: space-around;  
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: #8ee4af;
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

      &:visited {
        color: #8ee4af;
      }

      &.selected {
        background-color: #8ee4af;
        color: #05386b;
      }
    }
  }
`

const Navigation = () => {
  const navList = NAV_NAMES.map( (name, idx) => {
    const route = name === 'Home' 
    ? process.env.PROPER_PATH 
    : process.env.PROPER_PATH + name.toLowerCase();
    
      return (
        <li key={ idx+1 }>
          <NavLink to={ route } activeClassName='selected' exact={ true }>
            { name }
          </NavLink>
        </li>
      );
  });

  return (
    <Nav>
      <ul>
        {navList}
      </ul>
    </Nav>
  );
}

export default Navigation;