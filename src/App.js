import React, { Component, PureComponent } from "react";

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

class InputBar extends PureComponent {
  render() {
    console.log("inputBar is render...");
    return (
      <form>
        <label>할일 입력 : </label>
        <input />
        <button>등록</button>
      </form>
    );
  }
}

class OutputTable extends Component {
  render() {
    console.log("OutputTable is render...");
    const todoList = this.props.todoList.map(todoItem => (
      <OutputRow key={todoItem.id} title={todoItem.title} />
    ));
    return (
      <>
        {/* 중앙정렬 하는법 flex  */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3>해야할 일들</h3>
          <button>접기</button>
        </div>
        <ul>{todoList}</ul>
      </>
    );
  }
}

class OutputRow extends Component {
  render() {
    const { title } = this.props;
    return <li>{title}</li>;
  }
}
