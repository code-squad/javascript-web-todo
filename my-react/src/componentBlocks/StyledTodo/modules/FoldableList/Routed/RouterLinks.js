import React from 'react';
import { NavLink } from 'react-router-dom';

function RouterLinks({ className }) {
  return (
    <ul className={className}>
      <li>
        <NavLink exact to="/" activeClassName="selected">
          All
        </NavLink>
      </li>
      <li>
        <NavLink to="/todo" activeClassName="selected">
          Doing
        </NavLink>
      </li>
      <li>
        <NavLink to="/done" activeClassName="selected">
          Completed
        </NavLink>
      </li>
    </ul>
  );
}

export default RouterLinks;
