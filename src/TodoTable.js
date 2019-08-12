import React, { Component } from "react";
import OutputTable from './OutputTable';
import InputBar from './InputBar';

export default class TodoTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  async componentDidMount() {
    // fetch로 받은 데이터를 사용하기 위해서는 response.json()해주어야함.
    try {
      const response = await fetch(
        "https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist"
      );
      const data = await response.json();
      if(data.statusCode === '404') throw Error("status404 : 잘못된 url로 요청을 보냈습니다.");
      const todos = data.body;

      // setState에 ({}) 로 써주기
      this.setState({
        todos
      });
    } catch (error) {
      console.warn(error)
    }
  }

  render() {
    console.log("TodoTable is render...", this.state.todos);
    return (
      <div>
        <InputBar />
        <OutputTable todoList={this.state.todos} />
      </div>
    );
  }
}



