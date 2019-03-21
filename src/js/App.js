import React, { Component } from 'react';
import '../scss/app.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: null,
    }
  }

  componentDidMount() {
    this.getData('https://javascript-web-todo-server.herokuapp.com/')
  }

  getData(dataUrl) {
    fetch(dataUrl).then(res => {
      return res.json()
    }).then(jsonData => {
      this.handleData(jsonData);
    }) 
  }

  handleData(jsonData) {
    this.setState({
      task: jsonData
    })
  }
  
  render() {
    return (
      <div className='todo-app'>{}</div>
    );
  }
}

export default App;
