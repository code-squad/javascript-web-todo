import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { display } from "@material-ui/system";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const ShowTodo = props => {
  const todoRef = useRef(null);

  const makeLiData = todos => {
    const arr = todos.map(data => {
      return (
        <LI
          onClick={() => {
            props.onChange(data);
          }}
          key={data.id}
        >
          {data.title}
          <IconButton
            id={data.id}
            onClick={e => {
              e.stopPropagation();
              props.onDelete(data);
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </LI>
      );
    });

    return arr;
  };

  const makeLiComponent = obj => {
    const todos = obj.data;
    const error = obj.error;
    const isEmpty = !todos.length;
    let result;

    if (error) {
      result = (
        <ul ref={todoRef}>
          <li>데이터 요청 실패</li>
        </ul>
      );
    } else if (!isEmpty) {
      result = <ul ref={todoRef}>{makeLiData(todos)}</ul>;
    } else {
      result = (
        <ul>
          <li>없음</li>
        </ul>
      );
    }

    return result;
  };

  const ModulateContent = e => {
    if (e.target.innerHTML === "접기") {
      e.target.innerHTML = "펼치기";
      todoRef.style.display = "none";
    } else {
      e.target.innerHTML = "접기";
      todoRef.style.display = "block";
    }
  };

  return (
    <DIV>
      <HEADER customAttr="test">해야할 일</HEADER>
      <Button
        color="secondary"
        onClick={e => {
          ModulateContent(e);
        }}
      >
        접기
      </Button>
      {makeLiComponent(props)}
    </DIV>
  );
};

const DIV = styled.div`
  width: 45%;
  background-color: #dedcee;
  border-radius: 20px;
  margin-top: 4em;
`;

const HEADER = styled.h3`
  font-family: Monospace;
  text-align: center;
  font-weight: 400;
  font-size: 1.4em;
  padding-top: 0.5em;
`;

const LI = styled.li`
  font-family: Monospace;
  font-size: 1.4em;
  font-weight: 100;
  height: 2.4em;
`;

export default ShowTodo;
