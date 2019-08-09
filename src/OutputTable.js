import React, { Component } from 'react';
import OutputRow from './OutputRow';

export default class OutputTable extends Component {
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

