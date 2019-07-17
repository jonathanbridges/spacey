import * as TwitterAPIUtil from '../util/external_api_util';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

const getTwitterFeed = payload => ({
  type: 'RECEIVE_TWEETS',
  payload
});

export const fetchNASATweets = () => dispatch => (
  TwitterAPIUtil.fetchNASATweets().then(tweets => dispatch(getTwitterFeed(tweets)))
);
