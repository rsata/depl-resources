import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import Deployment from './pages/deployment';
import Bindings from './Bindings';

import store, { history } from './store';

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={Bindings}>
        <IndexRoute component={Deployment} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
