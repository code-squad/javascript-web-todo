import React from 'react';
import FoldBtnTpl from './fold-btn-tpl.js'
import NavBtnTpl from './nav-btn-tpl.js'
import LoadingTpl from './loading-tpl.js'
import { TodoListTpl, DoneListTpl } from './task-list-tpl.js'

const TodoListContainerTpl = props => {
  let hidingClass = ['todo-list-container'];
  if (!props.taskState.bFolded) {
    hidingClass = ['hide', 'todo-list-container'];
  }

  return (
    <div className={hidingClass.join(' ')}>
      해야할 일들
      <FoldBtnTpl
        className="todo-list-hide-button"
        handleBFolded={props.handleBFolded}
      />
      <NavBtnTpl
        handleBTodo={props.handleBTodo}
        taskState={props.taskState}
      />
      <div className="todo-list">
        {props.taskState.bLoading === true ? (
          <LoadingTpl />
        ) : props.taskState.bTodo ? (
          <TodoListTpl
            taskState={props.taskState}
            initTask={props.initTask}
          />
        ) : (
          <DoneListTpl taskState={props.taskState} initTask={props.initTask} />
        )}
      </div>
    </div>
  );
};

export default TodoListContainerTpl
