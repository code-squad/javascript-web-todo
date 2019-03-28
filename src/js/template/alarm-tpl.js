import React from 'react';

const AlarmTpl = props => {
  if (props.taskState.tasks === null) {
    return <div className="alarm">잠시만 기다려주세요.</div>;
  }
  if (props.taskState.tasks.some(v => v.title === props.taskState.word)) {
    return <div className="alarm">같은 할 일은 보통 두번하지 않죠.</div>;
  }
  return <div className="alarm" />;
};

export default AlarmTpl