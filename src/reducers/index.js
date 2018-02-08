import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import time from './time';

const reducers = combineReducers({ time, routing: routerReducer });

export default reducers;
