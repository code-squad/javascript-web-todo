import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

async function fetchData(url) {
  const fetchData = await fetch(url);
  const jsonData = await fetchData.json();
  return jsonData.body;
}

class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }
  componentDidMount(){
    const url = 'https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist';
    fetchData(url).then(res => {
      this.setState({
        list: [...res]
      })
    })
  }
  render() {
    const list = this.state.list;
    return(
      <div>
        <TodoInput />
        <TodoList list={list} />
      </div>
    )
  }
}

export default TodoApp;
