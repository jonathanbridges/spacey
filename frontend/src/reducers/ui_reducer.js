import {TURN_ON_WIDGET,
        TURN_OFF_WIDGET ,
        TURN_ON_MODAL,
        TURN_OFF_MODAL} from '../actions/ui_actions'
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
const allOn={
    nasaIotd:'on',
    twitterFeed: 'on',
    spaceLaunchnews:'on',
    hubbleNews: 'on',
    roverPhotos: 'on',
    modal: 'on'
}


const uiReducer = (oldState = allOn, action) => {
  Object.freeze(oldState);

  let nextState=Object.assign({}, oldState);
  switch (action.type) {
    case TURN_ON_WIDGET:
      console.log(action.widget,'will be turned on')
      nextState[action.widget]= 'on'
      return nextState

    case TURN_OFF_WIDGET:
      console.log(action.widget,'will be turned off')
      nextState[action.widget]= 'off'
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
