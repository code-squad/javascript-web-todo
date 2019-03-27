import React, { Component } from 'react';
import styled from 'styled-components';

const TodoNumContainer = styled.div`
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 42px;
    border-radius: 50%;
    color: white;
    font-size: 20px;
    text-decoration: ${props => props.status === 'done'? 'line-through': 'none'} ;
    background-color: ${props => props.status === 'todo'? 'green' :
                                 props.status === 'done'? '#bbb'  : '#fff'};
`;

export default class TodoCounter extends Component{
	render(){
        const num = {
            todo : this.props.todoList.filter(v => v.status === 'todo').length,
            done : this.props.todoList.filter(v => v.status === 'done').length
        }
		return (
			<div className={this.props.className}>
                <TodoNumContainer status="todo">{num.todo}</TodoNumContainer>
                <TodoNumContainer status="done">{num.done}</TodoNumContainer>
            </div>
		);
	}
}