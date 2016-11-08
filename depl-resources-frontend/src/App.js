import React, { Component } from 'react';

import { Router, Route, indexRoute, hashHistory } from 'react-router';

import About from './pages/about';
import Deployment from './pages/deployment';
import Heat from './pages/heat';
import Layout from './pages/layout';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <indexRoute component={Deployment}/>
          <Route path='/about' component={About} />
          <Route path='/heat' component={Heat} />
        </Route>
      </Router>
    );
  }
}

export default App;
