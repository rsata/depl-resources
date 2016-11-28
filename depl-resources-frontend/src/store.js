import { createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import countReducer from './reducers/countReducer';
import initReducer from './reducers/initReducer';

const rootReducer = combineReducers({
  count: countReducer,
  data: initReducer,
  routing: routerReducer
})

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
