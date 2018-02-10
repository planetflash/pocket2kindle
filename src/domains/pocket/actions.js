import {
	POCKET_GET_REQUEST_TOKEN,
	POCKET_GET_REQUEST_TOKEN_SUCCESS,
	POCKET_GET_REQUEST_TOKEN_FAILURE,
 } from './constants';

export const getRequestToken = (params) => {
	console.log(params);
	return {
		type: POCKET_GET_REQUEST_TOKEN,
		params,
	}
}

export const putRequestTokenFailure = (payload) => {
	return {
		type: POCKET_GET_REQUEST_TOKEN_SUCCESS,
		payload,
	}
}

export const putRequestTokenSuccess = (payload) => {
	return {
		type: POCKET_GET_REQUEST_TOKEN_FAILURE,
		payload,
	}
}
