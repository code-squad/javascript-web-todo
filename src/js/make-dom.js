import React from 'react';
import RemoveTask from './remove-task.js';

const MakeAlarmDom = props => {
  if(props.state.tasks === null) {
    return(
      <div className={props.className}>잠시만 기다려주세요.</div>
    )
  }
  if (props.state.tasks.some(v => v.title === props.state.word)) {
    return (
      <div className={props.className}>같은 할 일은 보통 두번하지 않죠.</div>
    );
  }
  return (
    <div className={props.className}></div>
  );
};

const MakeTaskDom = props => {
  return (
    <div className="task">
      {props.state.tasks.map((v, i) => {
        return (
          <li key={i} className="task-list">
            {v.title}
            <RemoveTask
              title={v.title}
              initTask={props.initTask}
              state={props.state}
            />
          </li>
        );
      })}
    </div>
  );
};

const MakeLoadingDom = props => {
  return <div className={props.className} />;
};

export { MakeTaskDom, MakeLoadingDom, MakeAlarmDom };
