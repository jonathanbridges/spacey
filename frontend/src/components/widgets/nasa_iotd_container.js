import { connect } from 'react-redux';
import { fetchImageOfTheDay } from '../../actions/nasa_iotd_actions';
import NasaIOTD from './nasa_iotd'

const msp = (state, ownProps) => {
  return (
    {
      nasaIOTD: state.apis.nasaIOTD
    }
  )
}

const mdp = dispatch => ({
  fetchImageOfTheDay: () => dispatch(fetchImageOfTheDay()),
})

export default connect(msp, mdp)(NasaIOTD)
