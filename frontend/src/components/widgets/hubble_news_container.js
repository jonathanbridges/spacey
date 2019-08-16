import { connect } from 'react-redux';
import { dispatchTurnOn } from '../../actions/ui_actions';
import { fetchHubbleNews } from '../../actions/hubble_news_actions';
import HubbleNews from './hubble_news'

const msp = state => ({
  hubbleNews: state.apis.hubbleNews
})

const mdp = dispatch => ({
  modalOn: (modal) => dispatch(dispatchTurnOn(modal)),
  fetchHubbleNews: () => dispatch(fetchHubbleNews())
});

export default connect(msp, mdp)(HubbleNews);
