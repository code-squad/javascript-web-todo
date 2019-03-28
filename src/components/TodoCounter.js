import React from 'react';
import styled from 'styled-components';

const TodoNumContainer = styled.div`
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 42px;
    border-radius: 50%;
    color: white;
    font-size: 20px;
    text-decoration: ${props => props.status === 'complete'? 'line-through': 'none'} ;
    background-color: ${props => props.status === 'todo'? 'green' :
                                 props.status === 'complete'? '#bbb'  : '#fff'};
`;

export default function TodoCounter(props){
    const num = {
        todo : props.todoList.filter(v => v.status === 'todo').length,
        complete : props.todoList.filter(v => v.status === 'complete').length
    }
    return (
        <div className={props.className}>
            <TodoNumContainer status="todo">{num.todo}</TodoNumContainer>
            <TodoNumContainer status="complete">{num.complete}</TodoNumContainer>
        </div>
    );
}