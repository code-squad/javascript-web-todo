import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout";
import { TodoProvider } from "./components/TodoContext";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import About from "./pages/About";

const Root = _ => {
  return (
    <TodoProvider>
      <Router>
        <Layout>
          <Route path="/Home" exact component={Home} />
          <Route path="/Todo/" component={Todo} />
          <Route path="/about/" component={About} />
        </Layout>
      </Router>
    </TodoProvider>
  );
};

export default Root;
