import { connect } from 'react-redux';
import { dispatchTurnOn } from '../../actions/ui_actions';
import { fetchSpaceLaunchNow } from '../../actions/space_launch_now_actions';
import SpaceLaunchNews from './space_launch_news'

const msp = state => ({
  spaceLaunchNews: state.apis.spaceLaunchNews
});

const mdp = dispatch => ({
  modalOn: (modal) => dispatch(dispatchTurnOn(modal)),
  fetchSpaceLaunchNow: () => dispatch(fetchSpaceLaunchNow())
});

export default connect(msp, mdp)(SpaceLaunchNews);
