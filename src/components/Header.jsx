import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 100rem;
  background: #1976d2;
  height: 4rem;

  .item {
    text-decoration: none;
    position: relative;
    color: #c9cbd3;
    font-size: 2rem;
    font-weight: bold;
  }

  .active{
    color: white;
    &:after{
      position: absolute;
      top: 115%;
      left: -50%;
      content: "";
      width: 200%;
      border-bottom: 2px solid red;
    }
  }
}
`;

const Header = () => {
  return (
    <Wrapper>
      <NavLink exact to="/" className="item" activeClassName="active">
        HOME
      </NavLink>
      <NavLink to="/todo/" className="item" activeClassName="active">
        할일관리
      </NavLink>
      <NavLink to="/about/" className="item" activeClassName="active">
        ABOUT
      </NavLink>
    </Wrapper>
  );
};

export default Header;
