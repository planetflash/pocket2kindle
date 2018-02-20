import {
  POCKET_GET_REQUEST_TOKEN,
  POCKET_GET_ACCESS_TOKEN,
  POCKET_GET_REQUEST_TOKEN_SUCCESS,
  POCKET_GET_ACCESS_TOKEN_SUCCESS,
  POCKET_GET_REQUEST_TOKEN_FAILURE,
  POCKET_GET_ACCESS_TOKEN_FAILURE
} from "./constants";

const initialState = {
  loading: false,
  error: false,
  result: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POCKET_GET_REQUEST_TOKEN:
    case POCKET_GET_ACCESS_TOKEN:
      return {
        ...state,
        loading: true,
        error: false,
        result: null
      };

    case POCKET_GET_REQUEST_TOKEN_SUCCESS:
    case POCKET_GET_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        result: action.payload
      };

    case POCKET_GET_REQUEST_TOKEN_FAILURE:
    case POCKET_GET_ACCESS_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        result: null
      };

    default:
      return state;
  }
};
export default reducer;
