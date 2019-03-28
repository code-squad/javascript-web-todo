import React from 'react';
import ChangeStatusTask from '../change-status-task.js'
import RemoveTask from '../remove-task.js'

const TodoListTpl = props => {
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

const DoneListTpl = props => {
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

export { TodoListTpl, DoneListTpl }