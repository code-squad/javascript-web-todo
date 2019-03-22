import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    margin: 0 8px;
    padding: 3px 4px;
    outline: none;
    vertical-align: middle;
`;

export default class TodoInput extends React.Component{
	constructor(props){
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	handleSubmit(event) {
		event.preventDefault();
		this.props.addItem(this.state.value);
	}
	render() {
		return (
			<div className={this.props.className}>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="todoInput">할일 입력: </label>
					<input id="todoInput" type="text" value={this.state.value} onChange={this.handleChange}/>
					<input type="submit" value="등록" />
				</form>
			</div>
		);
	}
}