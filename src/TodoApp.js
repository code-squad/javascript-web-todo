import React, { Component } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

const StyledTodoContainer = styled.div`
  margin: 10% auto 0;
  width: 80%;
`;

const StyledTodoInput = styled(TodoInput)`
  margin-bottom: 50px;
  padding: 10px;
  background-color: #adced2;
`;
const StyledTodoList = styled(TodoList)`
  padding: 10px;
  background-color: #adced2;
`;

async function fetchData(url) {
  try{
    const fetchData = await fetch(url);
    const jsonData = await fetchData.json();
    return jsonData.body;
  } catch {
    throw new Error('http 요청 실패');
  }
}

class TodoApp extends Component {
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      list: [],
    }
    this.id = 0;
  }
  componentDidMount(){
    const url = 'https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist';
    fetchData(url).then(res => {
      this.setState({ list: [...res] })
    })
  }
  addItem(title){
    if(this.state.list.some(v => v.title === title)) return;
    const newItem = {
      title: title,
      id: this.id++,
      status: 'todo'
    }
    this.setState(({list}) => ({
      list: [...list, newItem]
    }))
  }
  removeItem(item){
    this.setState(({list}) => ({
      list: list.filter(v => v.title !== item)
    }))
  }
  render() {
    const list = this.state.list;
    return(
      <StyledTodoContainer>
        <StyledTodoInput 
          className={StyledTodoInput}
          addItem={this.addItem} />
        <StyledTodoList 
          className={StyledTodoList}
          removeItem={this.removeItem}
          list={list} />
      </StyledTodoContainer>
    )
  }
}

export default TodoApp;
