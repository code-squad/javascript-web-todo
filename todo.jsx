import React, { Component } from 'react';
import ToDoInput from './todo_input';
import ToDoList from './todo_list';


class ToDo extends Component {
    state = {
        name: 'koon'
    };

    render() {
        return (
            <div className="koon-todo">
                <ToDoInput />
                <ToDoList />
            </div>
        )
    }
}

export default ToDo;