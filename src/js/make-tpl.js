import React from 'react';
import RemoveTask from './remove-task.js';
import ChangeStatusTask from './change-status-task.js';
import Inputer from './inputer.js';
import FoldTask from './fold-task.js';

const MakeAlarmTpl = props => {
  if (props.taskState.tasks === null) {
    return <div className="alarm">잠시만 기다려주세요.</div>;
  }
  if (props.taskState.tasks.some(v => v.title === props.taskState.word)) {
    return <div className="alarm">같은 할 일은 보통 두번하지 않죠.</div>;
  }
  return <div className="alarm" />;
};

const MakeTodoListTpl = props => {
  return (
    <div className="task">
      {props.taskState.tasks.map((v, i) => {
        if (v.status === 'done') return <div key={i} />;
        return (
          <li key={i} className="task-list">
            {v.title}
            <ChangeStatusTask
              title={v.title}
              initTask={props.initTask}
              taskState={props.taskState}
            />
            <RemoveTask
              title={v.title}
              initTask={props.initTask}
              taskState={props.taskState}
            />
          </li>
        );
      })}
    </div>
  );
};

const MakeDoneTpl = props => {
  return (
    <div className="task">
      {props.taskState.tasks.map((v, i) => {
        if (v.status === 'todo') return <div key={i} />;
        return (
          <li key={i} className="task-list">
            {v.title}
            <ChangeStatusTask
              title={v.title}
              initTask={props.initTask}
              taskState={props.taskState}
            />
            <RemoveTask
              title={v.title}
              initTask={props.initTask}
              taskState={props.taskState}
            />
          </li>
        );
      })}
    </div>
  );
};

const MakeLoadingTpl = props => {
  return <div className="loading" />;
};

const MakeAddTodoTpl = props => {
  return (
    <div className="add-todo">
      할일 입력:
      <Inputer
        taskState={props.taskState}
        initTask={props.initTask}
        handleChangeWord={props.handleChangeWord}
      />
      <MakeAlarmTpl taskState={props.taskState} />
    </div>
  );
};

const MakeTodoListContainerTpl = props => {
  let hidingClass = ['todo-list-container'];
  if (!props.taskState.bFolded) {
    hidingClass = ['hide', 'todo-list-container'];
  }

  return (
    <div className={hidingClass.join(' ')}>
      해야할 일들
      <FoldTask
        className="todo-list-hide-button"
        handleBFolded={props.handleBFolded}
      />
      <MakeNavBtnTpl
        handleBTodo={props.handleBTodo}
        taskState={props.taskState}
      />
      <div className="todo-list">
        {props.taskState.tasks === null ? (
          <MakeLoadingTpl />
        ) : props.taskState.bTodo ? (
          <MakeTodoListTpl
            taskState={props.taskState}
            initTask={props.initTask}
          />
        ) : (
          <MakeDoneTpl taskState={props.taskState} initTask={props.initTask} />
        )}
      </div>
    </div>
  );
};

const MakeNavBtnTpl = props => {
  return (
    <button className="todo-list-nav-button" onClick={props.handleBTodo}>
      {props.taskState.bTodo ? '할 일' : '한 일'}
    </button>
  );
};

export { MakeAddTodoTpl, MakeTodoListContainerTpl };
