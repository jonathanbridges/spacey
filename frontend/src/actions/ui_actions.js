export const TURN_ON_NASAIOTD = "TURN_ON_NASAIOTD"
export const TURN_OFF_NASAIOTD = "TURN_OFF_NASAIOTD"


const turnOnNiotd = () => ({
  type: 'TURN_ON_NASAIOTD',
});

const turnOffNiotd = () => ({
  type: 'TURN_OFF_NASAIOTD',
});




export const dispatchTurnOnNiotd = () => dispatch => (
   dispatch(turnOnNiotd())
)
export const dispatchTurnOffNiotd = () => dispatch => (
   dispatch(turnOffNiotd())
)