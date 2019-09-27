import { Route, Router, Switch } from 'react-router';

import Home from './routes/home';
import Login from './routes/login';
import Playlist from './routes/playlist';
import React from 'react';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/playlist/:id' component={ Playlist } />
        <Route exact path='/login' component={ Login } />
      </Switch>
    </Router>
  );
}
