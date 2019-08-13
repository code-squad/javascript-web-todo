import React from 'react';
import ToDoInput from './todo_input';
import ToDoList from './todo_list_ul';
import styled from 'styled-components';

const ToDoApp = styled.div`
    max-width: 768px;
    min-height: 500px;
    border-radius: 10px;
    background: #11111d;
    margin: 0 auto;    
    box-shadow: -webkit-box-shadow: 10px 10px 13px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 13px -10px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 13px -10px rgba(0,0,0,0.75);
    color: #8e8eb8;
    padding: 20px;
`

const ToDo = () => {
    return (
        <ToDoApp>
            <ToDoInput />
            <ToDoList />
        </ToDoApp>
    )
}

export default ToDo;