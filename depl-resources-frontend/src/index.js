import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect } from 'react-router';
import Layout from './Layout';
import store, { history } from './store';

import Deployment from './containers/deployment';
import Heat from './containers/heat';
import Admin from './containers/admin';
import Resource from './containers/resource';

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path='/' component={Layout}>
        <IndexRedirect to='/deployment' />
        <Route path='deployment' component={Deployment} />
        <Route path='resource/:type/:id' component={Resource} />
        <Route path='heat' component={Heat} />
        <Route path='admin' component={Admin} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
