import React from 'react';
import Inputer from '../inputer.js';
import AlarmTpl from './alarm-tpl.js';

const AddTodoTpl = props => {
  return (
    <div className="add-todo">
      할일 입력:
      <Inputer
        taskState={props.taskState}
        initTask={props.initTask}
        handleChangeWord={props.handleChangeWord}
      />
      <AlarmTpl taskState={props.taskState} />
    </div>
  );
};

export default AddTodoTpl;
