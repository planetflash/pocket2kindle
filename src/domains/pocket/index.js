import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';

import Component from './component';

function mapStateToProps(state) {
	return {
		state: state.pocketReducer,
	}
}

function mapDispatchToProps(dispatch) {
  return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Component);
