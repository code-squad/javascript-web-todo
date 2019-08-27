import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout";
import { TodoProvider } from "./components/TodoContext";
import { Home, About, Todo } from "./pages";

const Root = _ => {
  return (
    <TodoProvider>
      <Router>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/Todo" component={Todo} />
          <Route path="/About" component={About} />
        </Layout>
      </Router>
    </TodoProvider>
  );
};

export default Root;
