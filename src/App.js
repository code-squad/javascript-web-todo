import React from "react";
import TodoTable from "./TodoTable";
import { hot } from "react-hot-loader/root";


const App = props => {
  return (
    <div>
      <TodoTable />
    </div>
  );
};

export default hot(App);