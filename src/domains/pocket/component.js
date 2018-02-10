import React from 'react';
import PropTypes from 'prop-types';

// components
import Button from '../../components/Button/';

class PocketComponent extends React.Component {

	authenticatePocket = (e) => {
		e && e.preventDefault();

		this.props.getRequestToken({ test: 'test' });

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
	}

	render() {
		return (
			<div>
				<p>Pocket component</p>
				<Button
					onClick={ (e) => this.authenticatePocket(e)}
				>
					Authenticate Pocket
				</Button>
			</div>
    )
  }
}

PocketComponent.propTypes = {
	getRequestToken: PropTypes.func.isRequired,
}

export default PocketComponent;
