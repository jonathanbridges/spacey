import { connect } from 'react-redux';
import ImageBox from './image_box';
import { dispatchTurnOff } from '../../actions/ui_actions'

const mapDispatchToProps = (dispatch) => ({
  modalOff: () => dispatch(dispatchTurnOff())
});

export default connect(
  null,
  mapDispatchToProps
)(ImageBox);
