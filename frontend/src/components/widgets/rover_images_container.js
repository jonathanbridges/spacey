import { connect } from 'react-redux';
import { fetchRoverManifest, fetchRoverPhotos } from '../../actions/nasa_rover_images_actions';
import RoverImages from './rover_images'

const msp = (state, ownProps) => {
  return (
    {
      roverManifest: state.apis.marsRoverManifest,
      roverImages: state.apis.marsRoverPhotos
    }
  )
}

const mdp = dispatch => ({
  fetchRoverManifest: () => dispatch(fetchRoverManifest()),
  fetchRoverPhotos: (date) => dispatch(fetchRoverPhotos(date)),
})

export default connect(msp, mdp)(RoverImages);
