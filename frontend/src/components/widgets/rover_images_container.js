import { connect } from 'react-redux';
import { dispatchTurnOn } from '../../actions/ui_actions';
import { fetchRoverManifest, fetchRoverPhotos } from '../../actions/nasa_rover_images_actions';
import RoverImages from './rover_images'

const msp = state => ({
  roverManifest: state.apis.marsRoverManifest,
  roverImages: state.apis.marsRoverPhotos
})

const mdp = dispatch => ({
  modalOn: (modal) => dispatch(dispatchTurnOn(modal)),
  fetchRoverManifest: () => dispatch(fetchRoverManifest()),
  fetchRoverPhotos: (date) => dispatch(fetchRoverPhotos(date)),
})

export default connect(msp, mdp)(RoverImages);
