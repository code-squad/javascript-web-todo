import React, { Component } from 'react';
import RemoveBtn from './RemoveBtn';
import styled from 'styled-components'

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4px;
  border-bottom: 2px solid #05386b;
  margin-bottom: 5px;
`

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`

const Span = styled.span`
  font-weight: 550;
`

class ContentsList extends Component {
  render() {
    return (
      <Li>
        <Div>
          <Span>{this.props.title}</Span>
          <Span>{this.props.status}</Span>
        </Div>
        <RemoveBtn />
      </Li>
    );
  }
}

export default ContentsList;