export const TURN_ON_NASAIOTD = "TURN_ON_NASAIOTD"
export const TURN_OFF_NASAIOTD = "TURN_OFF_NASAIOTD"


export const TURN_ON_MODAL = "TURN_ON_MODAL"
export const TURN_OFF_MODAL = "TURN_OFF_MODAL"

const turnOnNiotd = () => ({
  type: 'TURN_ON_NASAIOTD',
});

const turnOffNiotd = () => ({
  type: 'TURN_OFF_NASAIOTD',
});



const turnOnModal = ( modal) => ({
  type: 'TURN_ON_MODAL',
  modal
});

const turnOffModal = () => ({
  type: 'TURN_OFF_MODAL',
});




export const dispatchTurnOnNiotd = () => dispatch => (
   dispatch(turnOnNiotd())
)
export const dispatchTurnOffNiotd = () => dispatch => (
   dispatch(turnOffNiotd())
)

export const dispatchTurnOn = (modal) => dispatch => (
   dispatch(turnOnModal(modal))
)
export const dispatchTurnOff = () => dispatch => (
   dispatch(turnOffModal())
)