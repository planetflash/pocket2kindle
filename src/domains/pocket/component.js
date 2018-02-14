import React from 'react';
import PropTypes from 'prop-types';

// components
import Button from '../../components/Button/';

class PocketComponent extends React.Component {

	authenticatePocket = (e) => {
		e && e.preventDefault();

		const { getRequestToken } = this.props.actions;

		getRequestToken({ test: 'test' });

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

		const { loading } = this.props.status;

		return (
			<div>
				<p>Pocket component</p>
				<Button
					loading={loading}
					onClick={ (e) => this.authenticatePocket(e) }
				>
					Authenticate Pocket
				</Button>
			</div>
    )
  }
}

PocketComponent.propTypes = {
	actions: PropTypes.shape({
		getRequestToken: PropTypes.func.isRequired,
		putRequestTokenFailure: PropTypes.func.isRequired,
		putRequestTokenSuccess: PropTypes.func.isRequired,
	}),
	status: PropTypes.shape({
	 	 loading: PropTypes.bool.isRequired,
	 	 error: PropTypes.bool.isRequired,
	})
}

export default PocketComponent;
