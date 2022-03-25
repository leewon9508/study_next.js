import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from 'redux-logger';
import {counter,login} from '../../src/modules/testRedux'

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
  return createStore(reducer, bindMiddleware([logger]));
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.name
});

export default wrapper;