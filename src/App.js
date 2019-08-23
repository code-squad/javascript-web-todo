import { hot } from "react-hot-loader/root";
import React from "react";
import TodoApp from "./TodoApp";


const App = props => {
  return (
    <div>
      <TodoApp />
    </div>
  );
};

export default hot(App);