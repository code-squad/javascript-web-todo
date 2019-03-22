import React from 'react';

const MakeTaskDom = props => {
  return (
    <div className="task">
      {props.data.map((v, i) => {
        return (
          <li key={i} className="task-list">
            {v.title}
            <button className='task-list-button'>
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

export { MakeTaskDom, MakeLoadingDom };
