import React, { useState, useEffect, useContext } from "react";
import { TodoContext } from "./ToDoStore";
import styled, { css } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { display } from "@material-ui/system";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const ShowTodo = () => {
  const [toggle, setToggle] = useState(true);
  const { todoData, error, loading, dispatch } = useContext(TodoContext);

  const makeLiData = todos => {
    const arr = todos.map(data => {
      return (
        <LI
          onClick={() => {
            dispatch({ type: "CHANGE_TODO", payload: data });
          }}
          key={data.id}
        >
          {data.status === "todo" ? data.title : <del>{data.title}</del>}
          <IconButton
            id={data.id}
            onClick={e => {
              e.stopPropagation();
              dispatch({ type: "DELETE_TODO", payload: data });
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </LI>
      );
    });

    return arr;
  };

  const makeLiComponent = data => {
    const todos = data;
    const isEmpty = !todos.length;
    let result;

    if (!isEmpty) {
      result = makeLiData(todos);
    } else {
      result = <li>없음</li>;
    }
    return result;
  };

  const ModulateWindow = e => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <DIV>
      <HEADER customAttr="test">해야할 일</HEADER>
      <Button color="secondary" onClick={e => ModulateWindow(e)}>
        {toggle ? "접기" : "펼치기"}
      </Button>
      <ul style={{ display: toggle ? "block" : "none" }}>
        {error && <li>네트워크 요청 실패</li>}
        {loading && <li>로딩중...</li>}
        {!error && !loading && makeLiComponent(todoData)}
      </ul>
    </DIV>
  );
};

const DIV = styled.div`
  width: 45%;
  background-color: #dedcee;
  border-radius: 20px;
  margin-top: 3em;
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
