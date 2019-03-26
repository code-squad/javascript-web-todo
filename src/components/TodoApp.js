import React, { Component } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoCounter from "./TodoCounter";
import { default as Url } from "../util/UrlList";
import { default as Type} from "../util/Type";
import { fetchData } from "../util/Helpers";

const StyledTodoCounter = styled(TodoCounter)`
	display: flex;
  position: absolute;
  right: 0px;
  transform: translateY(-100%);
	padding: 20px;
	border-radius: 50%;
`;

const StyledTodoContainer = styled.div`
  position: relative;
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



class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoList: [],
    }
    this.todoUrl = Url.todoList;
    this.todoId = 0;
  }
  componentDidMount(){
    fetchData(this.todoUrl).then(res => {
      this.setState({ todoList: [...res] })
    })
  }
  addItem = title => {
    if(this.state.todoList.some(v => v.title === title)) return;
    const newItem = {
      title: title,
      id: this.todoId++,
      status: 'todo'
    }
    this.setState(({todoList}) => ({
      todoList: [...todoList, newItem]
    }))
  }
  completeTodo = item => {
    this.setState(({todoList}) => ({
      todoList: todoList.map(o => {
        let newObj = {...o};
        if(o.title === item) newObj['status'] = 'done';
        return newObj;
      })
    }))
  }
  render() {
    const todoList = this.state.todoList;
    return(
      <StyledTodoContainer>
        <StyledTodoCounter todoList={this.state.todoList} className={StyledTodoCounter}/>
        <StyledTodoInput 
          className={StyledTodoInput}
          addItem={this.addItem} />
        <StyledTodoList 
          className={StyledTodoList}
          completeTodo={this.completeTodo}
          todoList={todoList}
          Type={Type} />
      </StyledTodoContainer>
    )
  }
}

export default TodoApp;
