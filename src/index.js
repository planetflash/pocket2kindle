import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import store, { history } from './store';

// Polyfills
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/fn/set';
import 'core-js/fn/array/from'; 

import './main.scss';

// const pocketButton = document.getElementById('app');
// authorizePocketButton.innerHTML = '<button>Authorize Pocket</button>';

// authorizePocketButton.addEventListener('click', e => {
//
// 	fetch('/api/pocket/requestToken')
// 	  .then( response => {
// 	    if (!response.ok) { throw response; }
// 	    return response.json();
// 	  })
// 	  .then( json => {
// 			console.log(json);
// 	  })
// 	  .catch( error => {
// 	    error.text().then( errorMessage => {
// 				console.error(errorMessage);
// 	    })
// 	  });
// });

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="*" component={AppContainer}>
			</Route>
		</Router>
	</Provider>
);

render(router, document.querySelector('#app'));

if (process.env.NODE_ENV === 'development') {
	console.info('Running in development mode!');
}
