import React from "react";
import TodoApp from "./TodoApp";
import { hot } from "react-hot-loader/root";


const App = props => {
  return (
    <div>
      <TodoApp />
    </div>
  );
};

export default hot(App);