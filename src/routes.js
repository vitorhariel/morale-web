import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './services/history';

import Home from './pages/Home';
import Plano from './pages/Plano';
import Privacy from './pages/Privacy';

import NotFound from './pages/NotFound';

export default function src() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/plano" component={Plano} />
        <Route path="/privacy" component={Privacy} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
