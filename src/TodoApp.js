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
  componentDidMount(){
    const url = 'http://crong.codesquad.kr:8080/todo';
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
        
      </div>
    )
  }
}

export default TodoApp;
