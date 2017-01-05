import { createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import updateDocsReducer from './reducers/updateDocsReducer';
import navReducer from './reducers/navReducer';

const rootReducer = combineReducers({
  deploymentDocs: updateDocsReducer,
  nav: navReducer,
  routing: routerReducer
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
