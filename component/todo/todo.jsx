import React, { useState } from 'react';
import ToDoInput from './todo_input';
import ToDoStatus from './todo_status';
import ToDoList from './todo_list';
import styled from 'styled-components';

const ToDoApp = styled.div`
    max-width: 768px;
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
    const [inputValue, setInputValue] = useState('');

    const inputHandler = (value) => {
        console.log('input handler value passed')
        setInputValue(value);
    }

    return (
        <ToDoApp>
            <ToDoInput handler={inputHandler} />
            <ToDoStatus />
            <ToDoList newValue={inputValue} />
        </ToDoApp>
    )
}

export default ToDo;