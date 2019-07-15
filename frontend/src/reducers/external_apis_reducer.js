import { RECEIVE_IOTD } from '../actions/nasa_iotd_actions';
import { RECEIVE_LAUNCHES } from '../actions/spacex_launch_actions';

const externalApiReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_IOTD:
      return Object.assign({}, oldState, { nasaIOTD: action.payload });
    case RECEIVE_LAUNCHES:
      return Object.assign({}, oldState, { spacexLaunches: action.payload });
    default:
      return oldState;
  }
};

export default externalApiReducer;
