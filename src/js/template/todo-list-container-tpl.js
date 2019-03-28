import React from 'react';
import FoldBtnTpl from './fold-btn-tpl.js';
import NavBtnTpl from './nav-btn-tpl.js';
import LoadingTpl from './loading-tpl.js';
import { TodoListTpl, DoneListTpl } from './task-list-tpl.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const TodoListContainerTpl = props => {
  let hidingClass = ['todo-list-container'];
  if (!props.taskState.bFolded) {
    hidingClass = ['hide', 'todo-list-container'];
  }
  const productTodoList = _ => {
    return <TodoListTpl {...props} />;
  };

  const productDoneList = _ => {
    return <DoneListTpl {...props} />;
  };

  return (
    <div className={hidingClass.join(' ')}>
      해야할 일들
      <FoldBtnTpl
        className="todo-list-hide-button"
        handleBFolded={props.handleBFolded}
      />
      <Router>
        <NavBtnTpl
          handleBTodo={props.handleBTodo}
          taskState={props.taskState}
        />
        <div className="todo-list">
          {props.taskState.bLoading === true ? (
            <LoadingTpl />
          ) : (
            <div>
              <Route exact path="/" render={productTodoList} />
              <Route path="/todo" render={productTodoList} />
              <Route path="/done" render={productDoneList} />
            </div>
          )}
        </div>
      </Router>
    </div>
  );
};

export default TodoListContainerTpl;
