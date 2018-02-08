import { put, call, fork, takeLatest, takeEvery, all } from 'redux-saga/effects';
import * as actions from '../actions';

// Test
function* setTime(action) {

	try {
		const results = 'new time';
		// yield put(actions.putTime(results));
	}
	catch(error) {
		// yield put(actions.addError(error, 'journeyPlanner'));
	}
}
function* watchSetTime() {
  yield takeLatest(actions.setTime, setTime);
}

export default function* root() {
  yield all([
		fork(watchSetTime),
  ])
}
