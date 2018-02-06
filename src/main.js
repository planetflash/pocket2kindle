import * as helpers from './helpers/helpers.js';
import './main.scss';

const authorizePocketButton = document.getElementById('app');
authorizePocketButton.innerHTML = '<button>Authorize Pocket</button>';

authorizePocketButton.addEventListener('click', e => {

	fetch('/api/pocket/requestToken')
	  .then( response => {
	    if (!response.ok) { throw response; }
	    return response.json();
	  })
	  .then( json => {
			console.log(json);
	  })
	  .catch( error => {
	    error.text().then( errorMessage => {
				console.error(errorMessage);
	    })
	  });
});

if (process.env.NODE_ENV === 'development') {
  console.info('Running in development mode!');
}
