// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import nasaIOTD from './nasa_iotd_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  nasaIOTD
});

export default RootReducer;