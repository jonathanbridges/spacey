import {TURN_ON_NASAIOTD,
        TURN_OFF_NASAIOTD ,
        TURN_ON_MODAL,
        TURN_OFF_MODAL} from '../actions/ui_actions'
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
const allOn={
    nasaIotd:'off',
    modal: 'on'
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
    
    case TURN_ON_MODAL:
      nextState.modal=action.modal
      return nextState

    case TURN_OFF_MODAL:
      nextState.modal='off'
      return nextState

    case RECEIVE_CURRENT_USER:
      nextState.modal = 'off'
      return  nextState
      
    default:
      return oldState;
  }
};

export default uiReducer;
