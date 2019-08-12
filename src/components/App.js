import React, {Component} from 'react';
import Input from './Input/Input';
import TodoList from './TodoList/TodoList';
import ContentsBtn from './ContentsBtn/ContentsBtn';
import styled from 'styled-components';
import todoApi from '../apis/todoApi';
import { INVALID_DATA, NETWORK_ERROR } from '../message/error';

const Div = styled.div`
  margin: 50px auto;
  width: 50%;
`

class App extends Component {
  state = {
    todo: []
  }

  async fetchMyTodoList()  {
    try {
      const todoJson = await todoApi.get('/develop/todolist');
      const myTodoList = todoJson.data.body;
      this.setState({ todo: myTodoList });
    } catch(err) {
      if(err.name === 'typeError') console.log(INVALID_DATA);
      if(err.message === 'Network Error') console.log(NETWORK_ERROR);
    }
  }

  componentDidMount() {
    this.fetchMyTodoList();
  }

  render() {
    return(
      <Div>
        <InputBar />
        <TodoList myTodo={ this.state.todo } />
        <ContentsBtn />
      </Div>
    )
  }
}

export default App;