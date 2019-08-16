import { connect } from 'react-redux';
import { dispatchTurnOn } from '../../actions/ui_actions';
import { fetchTweets } from '../../actions/twitter_actions';
import TwitterFeed from './twitter_feed';

const msp = state => ({
  tweets: state.apis.tweets
});

const mdp = dispatch => ({
  modalOn: (modal) => dispatch(dispatchTurnOn(modal)),
  fetchTweets: () => dispatch(fetchTweets())
});

export default connect(msp, mdp)(TwitterFeed);
