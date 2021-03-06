// src/components/session/signup_form_container.js

import { connect } from 'react-redux';
import { signup ,login} from '../../actions/session_actions';
import SignupForm from './signup_form';
import { dispatchTurnOff} from '../../actions/ui_actions'

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    modalOff: ()=>dispatch(dispatchTurnOff()),
    login: (user)=>dispatch(login(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);