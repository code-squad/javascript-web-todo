import React from 'react';
import { NavLink } from 'react-router-dom';

function RouterLinks({ className }) {
  return (
    <ul className={className}>
      <li>
        <NavLink to="/">All</NavLink>
      </li>
      <li>
        <NavLink to="/todo">Things to Do</NavLink>
      </li>
      <li>
        <NavLink to="/done">Completed</NavLink>
      </li>
    </ul>
  );
}

export default RouterLinks;
