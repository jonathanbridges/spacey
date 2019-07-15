import { RECEIVE_IOTD } from '../actions/nasa_iotd_actions';
// import merge from 'lodash/merge';

const nasaImageOfTheDayReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState;
  switch (action.type) {
    case RECEIVE_IOTD:
      return action.payload;
    default:
      return oldState;
  }
};

export default nasaImageOfTheDayReducer;
