import React, { Component } from "react";
import styled, { css } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { display } from "@material-ui/system";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

class ShowTodo extends Component {
  constructor(props) {
    super(props);
  }

  makeLiData = todos => {
    const arr = todos.map(data => {
      return (
        <LI key={data.id}>
          {console.log(data.id)}
          {data.title}
          <IconButton
            aria-label="delete"
            id={data.id}
            onClick={() => {
              console.log(`delete-btn click! target: ${data.id}`);
              this.props.onDelete(data.id);
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </LI>
      );
    });

    return arr;
  };

  makeLiComponent = obj => {
    const todos = obj.data;
    const error = obj.error;
    const isEmpty = todos.length === 0 ? true : false;
    let result;

    if (error) {
      result = (
        <ul>
          <li>데이터 요청 실패</li>
        </ul>
      );
    } else if (!isEmpty) {
      result = <ul>{this.makeLiData(todos)}</ul>;
    } else {
      result = (
        <ul>
          <li>없음</li>
        </ul>
      );
    }

    return result;
  };

  render() {
    const result = this.makeLiComponent(this.props);
    return (
      <DIV>
        <HEADER>해야할 일</HEADER>
        <Button color="secondary">접기</Button>
        {result}
      </DIV>
    );
  }
}

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

export default ShowTodo;
