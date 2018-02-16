import {
	POCKET_GET_REQUEST_TOKEN,
	POCKET_GET_REQUEST_TOKEN_SUCCESS,
	POCKET_GET_REQUEST_TOKEN_FAILURE,
	POCKET_GET_ACCESS_TOKEN,
	POCKET_GET_ACCESS_TOKEN_SUCCESS,
	POCKET_GET_ACCESS_TOKEN_FAILURE,
 } from './constants';

// Request Token
export const getRequestToken = (params) => {
	return {
		type: POCKET_GET_REQUEST_TOKEN,
		params,
	}
}

export const putRequestTokenSuccess = (payload) => {
	return {
		type: POCKET_GET_REQUEST_TOKEN_SUCCESS,
		payload,
	}
}

export const putRequestTokenFailure = (payload) => {
	return {
		type: POCKET_GET_REQUEST_TOKEN_FAILURE,
		payload,
	}
}

// Access Token
export const getAccessToken = (params) => {
	return {
		type: POCKET_GET_ACCESS_TOKEN,
		params,
	}
}

export const putAccessTokenSuccess = (payload) => {
	return {
		type: POCKET_GET_ACCESS_TOKEN_SUCCESS,
		payload,
	}
}

export const putAccessTokenFailure = (payload) => {
	return {
		type: POCKET_GET_ACCESS_TOKEN_FAILURE,
		payload,
	}
}
