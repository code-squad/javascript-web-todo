import React, { Component } from "react";
import styled, { css } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { display } from "@material-ui/system";

class ShowTodo extends Component {
  constructor(props) {
    super(props);
    console.log("ShowTodo 생성자");
  }

  makeLi(todos) {
    const arr = todos.map(data => {
      return <LI key={data.id}>{data.title}</LI>;
    });

    return arr;
  }

  render() {
    console.log("ShowTodo 렌더링");
    const todos = this.props.data;
    console.log(todos, todos.length);
    const correct = todos.length > 0 ? true : false;
    let test;

    if (correct) {
      test = (
        <DIV>
          <HEADER>해야할 일</HEADER>
          <Button color="secondary">접기</Button>
          <ul>{this.makeLi(todos)}</ul>
        </DIV>
      );
    } else {
      test = <DIV />;
    }

    return <>{test}</>;
  }
}

export default ShowTodo;

const DIV = styled.div`
  width: 400px;
  background-color: #dedcee;
  border-radius: 30px;
  margin-top: 80px;
`;

const LI = styled.li`
  font-family: Monospace;
  font-size: 18px;
  font-weight: 100;
  height: 40px;
`;

const HEADER = styled.h3`
  font-family: Monospace;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  padding-top: 10px;
`;
