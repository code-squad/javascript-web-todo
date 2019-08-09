import React, { Component } from 'react'

export default class OutputRow extends Component {
  render() {
    const { title } = this.props;
    return <li>{title}</li>;
  }
}
