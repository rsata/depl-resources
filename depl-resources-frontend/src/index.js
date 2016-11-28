import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect } from 'react-router';
import Bindings from './Bindings';
import store, { history } from './store';

import Deployment from './containers/deployment';
import Heat from './containers/heat'

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path='/' component={Bindings}>
        <IndexRedirect to='/deployment' />
        <Route path='deployment' component={Deployment} />
        <Route path='heat' component={Heat} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
