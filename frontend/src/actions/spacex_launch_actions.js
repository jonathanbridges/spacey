import * as SpaceXAPIUtil from '../util/external_api_util';

export const RECEIVE_LAUNCHES = 'RECEIVE_LAUNCHES';

const getSpaceXLaunches = payload => ({
  type: 'RECEIVE_LAUNCHES',
  payload
});

export const fetchSpaceXLaunches = () => dispatch => (
  SpaceXAPIUtil.fetchSpaceXLaunches().then(launches => dispatch(getSpaceXLaunches(launches)))
);
