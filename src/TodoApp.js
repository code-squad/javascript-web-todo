import React, { Component } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import { default as Url } from "./UrlList";
import { default as Type} from "./Type";
import { fetchData } from "./Helpers";


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
  removeItem = item => {
    this.setState(({todoList}) => ({
      todoList: todoList.filter(v => v.title !== item)
    }))
  }
  render() {
    const todoList = this.state.todoList;
    return(
      <StyledTodoContainer>
        <StyledTodoInput 
          className={StyledTodoInput}
          addItem={this.addItem} />
        <StyledTodoList 
          className={StyledTodoList}
          removeItem={this.removeItem}
          todoList={todoList}
          Type={Type} />
      </StyledTodoContainer>
    )
  }
}

export default TodoApp;
