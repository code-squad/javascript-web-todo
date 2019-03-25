import React, { Component } from 'react';
import styled from 'styled-components';

export default class TodoCounter extends Component{
	constructor(props){
        super(props);
        this.state={
            todoNum: 0,
            doneNum: 0
        }
    }
    componentDidMount(){
        this.getCount();
    }
    getCount(){
        this.setState((state, {todoList}) => ({
           todoNum: todoList.filter(v => v.status === 'todo').length,
           doneNum: todoList.filter(v => v.status === 'done').length,
        }))
    }
	render(){
        const todoNum = this.state.todoNum;
        const doneNum = this.state.doneNum;
		return (
			<div>
                <div>{todoNum}</div>
                <div>{doneNum}</div>
            </div>
		);
	}
}