import React from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavBtnTpl = props => {
  return (
    <span>
      <Link to="/todo" className="todo-list-nav-button">
        할 일
      </Link>
      <Link to="/done" className="todo-list-nav-button">
        한 일
      </Link>
    </span>
  );
};

export default NavBtnTpl;
