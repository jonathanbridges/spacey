// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import apis from './external_apis_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  apis
});

export default RootReducer;