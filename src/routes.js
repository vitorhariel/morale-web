import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';

import NotFound from './pages/NotFound';

export default function src() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={SignIn} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
