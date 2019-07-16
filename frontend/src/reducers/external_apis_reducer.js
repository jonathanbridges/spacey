import { RECEIVE_IOTD } from '../actions/nasa_iotd_actions';
import { RECEIVE_LAUNCHES } from '../actions/spacex_launch_actions';
import { RECEIVE_ROVER_MANIFEST, RECEIVE_ROVER_PHOTOS } from '../actions/nasa_rover_images_actions';

const externalApiReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_IOTD:
      return Object.assign({}, oldState, { nasaIOTD: action.payload });
    case RECEIVE_LAUNCHES:
      return Object.assign({}, oldState, { spacexLaunches: action.payload });
    case RECEIVE_ROVER_MANIFEST:
      return Object.assign({}, oldState, { marsRoverManifest: action.payload });
    case RECEIVE_ROVER_PHOTOS:
      return Object.assign({}, oldState, { marsRoverPhotos: action.payload });
    default:
      return oldState;
  }
};

export default externalApiReducer;
