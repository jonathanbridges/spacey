import { connect } from 'react-redux';
import { fetchSpaceLaunchNow } from '../../actions/space_launch_now_actions';
import SpaceLaunchNews from './space_launch_news'

const msp = (state, ownProps) => ({
  spaceLaunchNews: state.apis.spaceLaunchNews
});

const mdp = dispatch => ({
  fetchSpaceLaunchNow: () => dispatch(fetchSpaceLaunchNow())
});

export default connect(msp, mdp)(SpaceLaunchNews);
