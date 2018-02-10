import { connect } from 'react-redux';
import * as actions from './actions';

function mapStateToProps(state) {
  return {...state};
}

export default connect(
	mapStateToProps,
	actions,
)(Component);
