import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from 'redux-promise-middleware';

import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';

const store = createStore(
  combineReducers({ math: mathReducer, user: userReducer }),
  {},
  applyMiddleware(logger, thunk, promise())
);

export default  store;
