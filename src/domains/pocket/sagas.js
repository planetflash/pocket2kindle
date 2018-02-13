import { all, takeLatest } from 'redux-saga/effects';
import {
	POCKET_GET_REQUEST_TOKEN,
	// POCKET_GET_REQUEST_TOKEN_SUCCESS,
	// POCKET_GET_REQUEST_TOKEN_FAILURE,
 } from './constants';

// Get Request Token
function* getRequestToken(action) {

	console.log(action);

	// const { JPOptions } = action.params;
  //
	// // Build array of methods (always use swpti(transit) and Google(walking))
	// const methods = [swpti.getJourney, google.getJourney];
  //
	// if( JPOptions.includeCycling || JPOptions.includeDriving ) {
	// 	methods.push(rm.getJourney);
	// }
  //
	// const concurrent = methods.map( method => call(method, action.options));
  //
	// try {
	// 	let results = yield all(concurrent);
  //
	// 	// Combine results
	// 	results = [].concat(...results);
  //
	// 	// Finalise
	// 	results = finaliseResults(results);
  //
	// 	// If all are errors, we have no results, else put what we do have
	// 	if ( results.grouped && results.grouped.length > 0 ) {
  //
	// 		yield put(actions.putJourney(results));
  //
	// 	} else {
  //
	// 		yield put(actions.addError('No results were returned', 'journeyPlanner'));
	// 	}
	// }
	// catch(error) {
	// 	yield put(actions.addError(error, 'journeyPlanner'));
	// }
}

export default [
	takeLatest(POCKET_GET_REQUEST_TOKEN, getRequestToken),
];
