
import {TURN_ON_NASAIOTD, TURN_OFF_NASAIOTD } from '../actions/ui_actions'
const allOn={
    nasaIotd:'off'
}


const uiReducer = (oldState = allOn, action) => {
  Object.freeze(oldState);

  let nextState=Object.assign({}, oldState);
  switch (action.type) {
    case TURN_ON_NASAIOTD:
      nextState.nasaIotd = 'on'
      return nextState

    case TURN_OFF_NASAIOTD:
      nextState.nasaIotd = 'off'
      return nextState

    default:
      return oldState;
  }
};

export default uiReducer;
