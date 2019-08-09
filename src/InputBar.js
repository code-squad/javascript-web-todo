import React, { Component } from 'react'

export default class InputBar extends Component {
  render() {
    console.log("inputBar is render...");
    return (
      <form>
        <label>할일 입력 : </label>
        <input />
        <button>등록</button>
      </form>
    );
  }
}

