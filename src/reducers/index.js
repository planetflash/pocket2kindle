import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import pocketReducer from "../domains/pocket/reducers";

const reducers = combineReducers({ routing: routerReducer, pocketReducer });

export default reducers;
