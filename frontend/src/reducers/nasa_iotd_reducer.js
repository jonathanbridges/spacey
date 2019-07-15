import { RECEIVE_IOTD } from '../actions/nasa_iotd_actions';

const nasaImageOfTheDayReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_IOTD:
      return action.payload;
    default:
      return oldState;
  }
};

export default nasaImageOfTheDayReducer;
