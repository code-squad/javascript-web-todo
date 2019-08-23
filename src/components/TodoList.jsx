import React, { Component } from "react";
import Header from "./Header.jsx";
import List from "./List.jsx";
import styled from "styled-components";

const itemList = ["공부하기", "스터디 준비", "알고리즘 공부", "컴퓨터 게임"];

class TodoList extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <List items={itemList} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border-radius: 8px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
`;

export default TodoList;
