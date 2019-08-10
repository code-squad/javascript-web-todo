import React, { Component } from "react";
import styled, { css } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { display } from "@material-ui/system";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

class ShowDone extends Component {
  constructor(props) {
    super(props);
  }

  makeLiData = dones => {
    const arr = dones.map(data => {
      return (
        <LI
          key={data.id}
          onClick={() => {
            this.props.onChange(data);
          }}
        >
          <del>{data.title}</del>
          <IconButton
            id={data.id}
            onClick={e => {
              e.stopPropagation();
              this.props.onDelete(data);
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </LI>
      );
    });

    return arr;
  };

  makeLiComponent = dones => {
    const isEmpty = dones.length === 0 ? true : false;
    let result;

    if (!isEmpty) return (result = <ul>{this.makeLiData(dones)}</ul>);
    return (result = (
      <ul>
        <li>없음</li>
      </ul>
    ));
  };

  ModulateContent = e => {
    if (e.target.innerHTML === "접기") e.target.innerHTML = "펼치기";
    else e.target.innerHTML = "접기";
  };

  render() {
    const result = this.makeLiComponent(this.props.data);
    return (
      <DIV>
        <HEADER>완료한 일</HEADER>
        <Button
          color="secondary"
          onClick={e => {
            this.ModulateContent(e);
          }}
        >
          접기
        </Button>
        {result}
      </DIV>
    );
  }
}

const DIV = styled.div`
  width: 45%;
  background-color: #fd999a;
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

export default ShowDone;
