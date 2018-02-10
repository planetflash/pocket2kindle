import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
	applyMiddleware(sagaMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, {}, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// Enable hot reloading of reducers
if(module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;
