import React, { Component } from "react";

class App extends Component {
  state = {
    title: "Hello Allen"
  };

  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
      </>
    );
  }
}

export default App;
