import React, { Component } from 'react';
import styled from 'styled-components';
import TodoInput from './TodoInput';
import TodoCounter from "./TodoCounter";
import TodoTabs from './TodoTabs';
import { default as Url } from "../util/UrlList";
import { default as Type} from "../util/Type";
import { fetchData } from "../util/Helpers";

const StyledTodoTabs = styled(TodoTabs)`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
`;

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
  margin: 100px auto 0;
  width: 80%;
`;

const StyledTodoInput = styled(TodoInput)`
  margin-bottom: 50px;
  padding: 10px;
  background-color: #adced2;
`;

class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoList: [],
      currentStatus: ''
    }
    this.todoUrl = Url.todoList;
    this.todoId = 0;
  }
  componentDidMount(){
    fetchData(this.todoUrl).then(res => {
      this.setState({ todoList: [...res.body] })
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
        if(o.title === item) newObj['status'] = 'complete';
        return newObj;
      })
    }))
  }
  render() {
    const todoList = this.state.todoList;
    const currentStatus = this.state.currentStatus;
    return(
      <StyledTodoContainer>
        <StyledTodoCounter todoList={this.state.todoList} className={StyledTodoCounter}/>
        <StyledTodoInput 
          className={StyledTodoInput}
          addItem={this.addItem} />
        <StyledTodoTabs 
          className={StyledTodoTabs}
          completeTodo={this.completeTodo}
          todoList={todoList}
          Type={Type}
          currentStatus={currentStatus}
        />
      </StyledTodoContainer>
    )
  }
}

export default TodoApp;
