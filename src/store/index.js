import { combineReducers, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

let enhancer;

if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

export const store = preloadedState => {
  return configureStore({ reducer: rootReducer }, preloadedState, enhancer);
};
