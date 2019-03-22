import React, { Component } from 'react';

async function fetchData(url) {
  const fetchData = await fetch(url);
  const jsonData = await fetchData.json();
  return jsonData;
}

class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }
  render() {
    return(
      <div></div>
    )
  }
}

export default TodoApp;
