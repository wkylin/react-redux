import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';

const store = createStore(
  combineReducers({ math: mathReducer, user: userReducer }),
  {},
  applyMiddleware(logger)
);

export default  store;
