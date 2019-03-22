import React, { Component } from 'react';
import '../scss/app.css';
import { MakeTaskDom, MakeLoadingDom } from './make-dom.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: null,
    };
  }

  componentDidMount() {
    this.getData('https://javascript-web-todo-server.herokuapp.com/');
  }

  async getData(dataUrl) {
    try {
      const fetchedRes = await fetch(dataUrl)
      const jsonData = await fetchedRes.json()
      this.handleData(jsonData);
    } catch (err){
      console.log(err)
    }
  }

  handleData(jsonData) {
    this.setState({
      task: jsonData,
    });
  }

  renderTaskDom() {
    if (this.state.task === null) return <MakeLoadingDom className="loading"/>
    return <MakeTaskDom data={this.state.task} />;
  }

  render() {
    return (
      <div className="todo-app-conatiner">
        <div className="add-todo">
          할일 입력: <input className="add-todo-inputer" />
          <button className="add-todo-inputer-button">입력</button>
        </div>
        <div className="todo-list-container">
          해야할 일들
          <button className="todo-list-hide-button">접기</button>
          <div className="todo-list">{this.renderTaskDom()}</div>
        </div>
      </div>
    );
  }
}

export default App;
