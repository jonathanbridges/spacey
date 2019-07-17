import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/twitter_actions';
import TwitterFeed from './twitter_feed';

const msp = (state, ownProps) => ({
  tweets: state.apis.tweets
});

const mdp = dispatch => ({
  fetchTweets: () => dispatch(fetchTweets())
});

export default connect(msp, mdp)(TwitterFeed);
