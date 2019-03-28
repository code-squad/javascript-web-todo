import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHeading2 = styled.h2`
    display: inline-block;
    margin: 0;
    font-size: 15px;
`;
const StyledLi = styled.li`
	padding: 5px 0;
`;
const StyledCloseBtn = styled.button`
    float: right;
    padding: 5px 10px;
    border: 0;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
`;
const StyledCompleteBtn = styled.button`
    width: 20px;
    height: 20px;
    margin-left: 5px;
    padding: 0;
    border-radius: 50%;
    background-color: #a59f9f;
    cursor: pointer;
`;

export default class TodoList extends Component{
	constructor(props){
		super(props);
		this.state={ bOpend: true }
	}
	componentDidMount(){
		this.createList(this.props);
	}
	createList({todoList, Type}){
		if(!Type.isArray(todoList)) return;
		const listItems = todoList.map(item => {
			if(item.status === this.props.currentStatus) {
				return <StyledLi key={item.id} onClick={this.completeTodo}>
					{item.title} 
					{this.props.currentStatus === 'todo' &&
					<StyledCompleteBtn type="button">X</StyledCompleteBtn>}
				</StyledLi>
			}	
		})
		return listItems;
	}
	toggleList = () => {
		this.setState(({bOpend}) => ({
			bOpend: !bOpend
		}));
	}
	completeTodo = e =>{
		if(e.target.type !== 'button') return;
		this.props.completeTodo(e.currentTarget.firstChild.nodeValue);
	}
	render(){
		const listItems = this.createList(this.props);
		let toggle = this.state.bOpend;
		return (
			<div className={this.props.className}>
				<StyledHeading2>해야할 일들:</StyledHeading2>
				<StyledCloseBtn onClick={this.toggleList}>{toggle?'접기':'열기'}</StyledCloseBtn>
				{toggle? <ul>{listItems}</ul> :null}
			</div>
		);
	}
}