import { createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import countReducer from './reducers/countReducer';

const rootReducer = combineReducers({
  count: countReducer,
  routing: routerReducer
})

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
