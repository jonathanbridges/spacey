import { connect } from 'react-redux';
import { dispatchTurnOn } from '../../actions/ui_actions';
import { fetchImageOfTheDay } from '../../actions/nasa_iotd_actions';

import NasaIOTD from './nasa_iotd'

const msp = state => ({
  display: state.ui.nasaIotd,
  nasaIOTD: state.apis.nasaIOTD
})

const mdp = dispatch => ({
  modalOn: (modal) => dispatch(dispatchTurnOn(modal)),
  fetchImageOfTheDay: () => dispatch(fetchImageOfTheDay()),
})

export default connect(msp, mdp)(NasaIOTD)
