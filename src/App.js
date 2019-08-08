import React, { Component } from "react";

export default class TodoTable extends Component {
  render() {
    const todoList = [
      {
        title: "공부하기",
        id: 1233,
        status: "todo"
      },
      {
        title: "스터디준비",
        id: 1234,
        status: "todo"
      },
      {
        title: "알고리즘공부",
        id: 1230,
        status: "todo"
      },
      {
        title: "컴퓨터게임",
        id: 1231,
        status: "todo"
      }
    ];
    return (
      <div>
        <InputBar />
        <OutputTable todoList={todoList} />
      </div>
    );
  }
}

class InputBar extends Component {
  render() {
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
    const todoList = this.props.todoList.map(todoItem=>
      <OutputRow todoItem={todoItem}/>
    );
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
    const {title} = this.props.todoItem;
    return(
      <li>{title}</li>
    )
    
  }
}
