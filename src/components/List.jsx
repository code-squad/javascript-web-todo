import React, { Component } from "react";
import Item from "./Item.jsx";
import styled from "styled-components";

class List extends Component {
  render() {
    const { items } = this.props;
    return (
      <Wrapper>
        {items.map((item, index) => {
          return <Item itemName={item} key={index} />;
        })}
      </Wrapper>
    );
  }
}

const Wrapper = styled.ul``;

export default List;
