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

// export 할 때 hot 함수를 실행시켜 내보낸다
export default hot(App);