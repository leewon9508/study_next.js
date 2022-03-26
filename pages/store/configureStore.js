import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from 'redux-logger';
import counter from '../../src/modules/counter'
import login from '../../src/modules/userHistory'
import reduxThunk from "redux-thunk";

const rootReducer =
    combineReducers({
      counter,
      login
    });

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action, payer
    };
  }
  return rootReducer(state, action)
}

const bindMiddleware = (middleware) => {
  return applyMiddleware(...middleware)
}

const configureStore = () => {
  return createStore(reducer, bindMiddleware([reduxThunk, logger]));
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.name
});

export default wrapper;