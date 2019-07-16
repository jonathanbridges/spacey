import { RECEIVE_IOTD } from '../actions/nasa_iotd_actions';
import { RECEIVE_LAUNCHES } from '../actions/spacex_launch_actions';
import { RECEIVE_SPACE_LAUNCH_NEWS } from '../actions/space_launch_now_actions';
import { RECEIVE_HUBBLE_NEWS } from '../actions/hubble_news_actions';

const externalApiReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_IOTD:
      return Object.assign({}, oldState, { nasaIOTD: action.payload });
    case RECEIVE_LAUNCHES:
      return Object.assign({}, oldState, { spacexLaunches: action.payload });
    case RECEIVE_SPACE_LAUNCH_NEWS:
      return Object.assign({}, oldState, { spaceLaunchNews: action.payload });
    case RECEIVE_HUBBLE_NEWS:
      return Object.assign({}, oldState, { hubbleNews: action.payload });
    default:
      return oldState;
  }
};

export default externalApiReducer;
