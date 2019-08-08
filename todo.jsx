import React, { Component } from 'react';
import ToDoInput from './todo_input';
import ToDoList from './todo_list';
import styled from 'styled-components';

const ToDoApp = styled.div`
    background: skyblue;
`

class ToDo extends Component {
    state = {
        name: 'koon'
    };

    render() {
        return (
            <ToDoApp>
                <ToDoInput />
                <ToDoList />
            </ToDoApp>
        )
    }
}

export default ToDo;