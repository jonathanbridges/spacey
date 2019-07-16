import * as SpaceLaunchNowAPIUtil from '../util/external_api_util';

export const RECEIVE_SPACE_LAUNCH_NEWS = 'RECEIVE_SPACE_LAUNCH_NEWS';

const getSpaceLaunchNowNews = payload => ({
  type: 'RECEIVE_SPACE_LAUNCH_NEWS',
  payload
});

export const fetchSpaceLaunchNow = () => dispatch => (
  SpaceLaunchNowAPIUtil.fetchSpaceLaunchNow().then(launches => dispatch(getSpaceLaunchNowNews(launches)))
);
