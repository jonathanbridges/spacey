export const TURN_ON_WIDGET = "TURN_ON_WIDGET"
export const TURN_OFF_WIDGET = "TURN_OFF_WIDGET"

export const TURN_ON_TWITTER_FEED = "TURN_ON_TWITTER_FEED"
export const TURN_OFF_TWITTER_FEED = "TURN_OFF_TWITTER_FEED"

export const TURN_ON_MODAL = "TURN_ON_MODAL"
export const TURN_OFF_MODAL = "TURN_OFF_MODAL"

const turnOnWidget = (value) => ({
  type: 'TURN_ON_WIDGET',
  widget: value
});

const turnOffWidget = (value) => ({
  type: 'TURN_OFF_WIDGET',
  widget: value
});



const turnOnModal = ( modal) => ({
  type: 'TURN_ON_MODAL',
  modal
});

const turnOffModal = () => ({
  type: 'TURN_OFF_MODAL',
});




export const dispatchTurnOnWidget = (value) => dispatch => (
   dispatch(turnOnWidget(value))
)
export const dispatchTurnOffWidget = (value) => dispatch => (
   dispatch(turnOffWidget(value))
)

export const dispatchTurnOn = (modal) => dispatch => (
   dispatch(turnOnModal(modal))
)
export const dispatchTurnOff = () => dispatch => (
   dispatch(turnOffModal())
)