import React, { Component } from 'react';
import styled from 'styled-components';

export default class TodoList extends Component{
	constructor(props){
		super(props);
		this.toggleList = this.toggleList.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.state={ isOpend: true }
	}
	componentDidMount(){
		this.createList(this.props);
	}
	createList({list}){
		if(toString.call(list) !== '[object Array]') return;
		const listItems = list.map(item => 
			<li key={item.id} onClick={this.removeItem}>
				{item.title} <button type="button">X</button>
			</li>
		)
		return listItems;
	}
	toggleList(){
		this.setState(({isOpend}) => ({
			isOpend: isOpend? false: true
		}));
	}
	removeItem(e){
		if(e.target.type !== 'button') return;
		this.props.removeItem(e.currentTarget.firstChild.nodeValue);
	}
	render(){
		const listItems = this.createList(this.props);
		let toggle = this.state.isOpend;
		return (
			<div className={this.props.className}>
				<h2>해야할 일들:</h2>
				<button onClick={this.toggleList}>{toggle?'접기':'열기'}</button>
				{toggle? <ul>{listItems}</ul> :null}
			</div>
		);
	}
}