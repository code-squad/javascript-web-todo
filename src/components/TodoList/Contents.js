import React, { Component } from 'react';
import ContentsList from './ContentsList';
import styled from 'styled-components';

const Div = styled.div`
  width: 85%;
  margin: 0 auto;
  color: #05386b;
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`

const P = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
  margin: 0;
`

class Contents extends Component {

  state = {
    todo: []
  }

  render() {
    const { myTodo } = this.props;
    const todoList = myTodo.map( ({ title, id, status }) => {
      return (
        <ContentsList 
          title={title} 
          status={status.toUpperCase()} 
          key={id}
        />
      )
    })
    return (
      <Div>
        <P>Todo</P>
        <Ul>
          {todoList}
        </Ul>
      </Div>
    )
  }
}

export default Contents;