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
      this.setState({
        list: [...res]
      })
    })
  }
  addItem(title){
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

  }
  render() {
    const list = this.state.list;
    return(
      <div>
        <TodoInput 
          addItem={this.addItem} />
        <TodoList 
          removeItem={this.removeItem}
          list={list} />
      </div>
    )
  }
}

export default TodoApp;
