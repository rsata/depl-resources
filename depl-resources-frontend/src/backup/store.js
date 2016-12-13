import { combineReducers, createStore } from "redux";
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import logger from 'redux-logger';
// import promise from 'redux-promise-middleware';
// import thunk from 'redux-thunk';

// const middleware = applyMiddleware(promise(), thunk, logger());
//
// export default createStore(reducer, middleware)


import reducer from './reducers/index';

const posts = [
  {
    id: '91847t9pg2',
    entry: 'this is a sample entry',
    lastEdited: new Date(),
    title: 'sample post',
    type: 'config'
  },
  {
    id: 'h34hw43tq4',
    entry: 'this is another sample entry',
    lastEdited: new Date(),
    title: 'sample post 2',
    type: 'standards'
  }
];

const dep = 0;
const heat = 0;

const defaultState = {dep, heat};

// const store = createStore(reducer, defaultState);
const store = createStore(reducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export const history = syncHistoryWithStore(browserHistory, store);

export default store;
