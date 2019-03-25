import React from 'react';

const MakeWarningDom = props => {
  return <div className={props.className}>같은 할 일은 보통 두번하지 않죠.</div>;
};

const MakeTaskDom = props => {
  return (
    <div className="task">
      {props.data.map((v, i) => {
        return (
          <li key={i} className="task-list">
            {v.title}
            <button className="task-list-button" onClick={props.removeTask}>
              제거
            </button>
          </li>
        );
      })}
    </div>
  );
};

const MakeLoadingDom = props => {
  return <div className={props.className} />;
};

export { MakeTaskDom, MakeLoadingDom, MakeWarningDom };
