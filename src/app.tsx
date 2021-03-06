import { Route, Router, Switch } from 'react-router';

import Home from './routes/home';
import React from 'react';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={ Home } />
      </Switch>
    </Router>
  );
}
