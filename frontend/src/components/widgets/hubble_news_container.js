import { connect } from 'react-redux';
import { fetchHubbleNews } from '../../actions/hubble_news_actions';
import HubbleNews from './hubble_news'

const msp = (state, ownProps) => ({
  hubbleNews: state.apis.hubbleNews
})

const mdp = dispatch => ({
  fetchHubbleNews: () => dispatch(fetchHubbleNews())
});

export default connect(msp, mdp)(HubbleNews);
