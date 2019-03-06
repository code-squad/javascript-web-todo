import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HeaderTitle = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <h2 className="title">Milestones</h2>} />
      <Route path="/todo" render={() => <h2 className="title">Things to Do</h2>} />
      <Route path="/done" render={() => <h2 className="title">Completed</h2>} />
    </Switch>
  </Router>
);

export default HeaderTitle;
