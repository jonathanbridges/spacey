import * as HubbleNewsAPIUtil from '../util/external_api_util';

export const RECEIVE_HUBBLE_NEWS = 'RECEIVE_HUBBLE_NEWS';

const getHubbleNews = payload => ({
  type: 'RECEIVE_HUBBLE_NEWS',
  payload
});

export const fetchHubbleNews = () => dispatch => (
  HubbleNewsAPIUtil.fetchHubbleNews().then(news => dispatch(getHubbleNews(news)))
);
