import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

import App from './components/App';

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
			<Route path="/" component={App}>
			</Route>
		</Router>
	</Provider>
);

render(router, document.querySelector('#app'));
