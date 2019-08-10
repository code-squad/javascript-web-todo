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
        <LI key={data.id}>
          <del>{data.title}</del>
          <IconButton id={data.id}>
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

  render() {
    const result = this.makeLiComponent(this.props.data);
    return (
      <DIV>
        <HEADER>완료한 일</HEADER>
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

export default ShowDone;
