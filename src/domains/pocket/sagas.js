import { call, put, takeLatest } from 'redux-saga/effects';
import {
	POCKET_GET_REQUEST_TOKEN,
 } from './constants';
 import * as service from './service';
 import * as actions from './actions';

// Get Request Token
function* getRequestToken(action) {

	try {
	  const response = yield call(service.getRequestToken);

		yield put(actions.putRequestTokenSuccess(response));

	} catch (e) {

		yield put(actions.putRequestTokenFailure(e));
	}
}

export default [
	takeLatest(POCKET_GET_REQUEST_TOKEN, getRequestToken),
];
