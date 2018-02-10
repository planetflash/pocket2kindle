import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import routes from './routes';

// Polyfills
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/fn/set';
import 'core-js/fn/array/from';

// Styles
import './reset.css';
import './main.scss';

render(
	<AppContainer>
		{ routes }
	</AppContainer>,
	document.getElementById('app')
);
