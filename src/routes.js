import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

import App from './components/App';

const routes = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
			</Route>
		</Router>
	</Provider>
);

export default routes;
