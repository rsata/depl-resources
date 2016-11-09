import React, { Component } from 'react';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Deployment from './pages/Deployment/deployment.js';
import Heat from './pages/Heat/heat.js';
import Layout from './pages/Layout/layout.js';
import Settings from './pages/Settings/settings.js';

class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Deployment} />
          <Route path='deployment' component={Deployment} />
          <Route path='heat' component={Heat} />
          <Route path='settings' component={Settings} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
