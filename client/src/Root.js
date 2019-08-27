import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout";
import { TodoProvider } from "./components/TodoContext";
import { Home, About, Todo } from "./pages";

const Root = _ => {
  debugger;
  return (
    <TodoProvider>
      <Router>
        <Layout>
          <Route path={process.env.ACCESS_PATH} exact component={Home} />
          <Route path={process.env.ACCESS_PATH + "Todo"} component={Todo} />
          <Route path={process.env.ACCESS_PATH + "About"} component={About} />
        </Layout>
      </Router>
    </TodoProvider>
  );
};

export default Root;
