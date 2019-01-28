import React, { Component } from "react";
import styled from "styled-components";

export class TodoInput extends Component {
  render() {
    return (
      <header>
        <input type="text" />
        <button>{`+`}</button>
      </header>
    );
  }
}

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.className = props.className;
    //long as they attach the passed className prop to a DOM element.
  }

  render() {
    return (
      <li className={this.className}>
        <span>{this.props.todoTitle}</span>
        <button>{`X`}</button>
      </li>
    );
  }
}

const StyledTodoItem = styled(TodoItem)`
  button {
    color: red;
    border: none;
  }
`;

async function _asyncGetTodoJson(apiURI) {
  const init = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    mode: "cors"
  };

  const data = await fetch(apiURI, init);
  const json = await data.json();

  return json;
}

const apiURI = "http://crong.codesquad.kr:8080/todo";

export class TodoList extends Component {
  //json: [{title(str), id(int), status(str)}]
  constructor(props) {
    super(props);
    this.state = { json: [] };
  }

  componentDidMount() {
    _asyncGetTodoJson(apiURI).then(json => this.setState({ json }));
  }

  render() {
    if (!this.state.json[0]) return <div>Loading...</div>;

    return (
      <ul>
        {this.state.json.map((item, idx) => (
          <StyledTodoItem
            key={item.id ? item.id : idx}
            todoTitle={item.title}
          />
        ))}
      </ul>
    );
  }
}
