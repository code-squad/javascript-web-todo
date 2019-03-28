import React from 'react';

const NavBtnTpl = props => {
  return (
    <button className="todo-list-nav-button" onClick={props.handleBTodo}>
      {props.taskState.bTodo ? '할 일' : '한 일'}
    </button>
  );
};

export default NavBtnTpl