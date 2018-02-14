import {
	POCKET_GET_REQUEST_TOKEN,
	// POCKET_GET_REQUEST_TOKEN_SUCCESS,
	// POCKET_GET_REQUEST_TOKEN_FAILURE,
 } from './constants';

 const initialState = {
	 loading: false,
	 error: false,
	 result: null,
 };

 const reducer = (state = initialState, action) => {

	switch(action.type) {

		case POCKET_GET_REQUEST_TOKEN:

			return {
				...state,
				loading: true,
				error: false,
				result: null,
			};

		default:
			return state;
	}
}
export default reducer;
