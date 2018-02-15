import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// components
import Button from '../../components/Button/';

class PocketComponent extends React.Component {

	authenticatePocket = (e) => {
		e && e.preventDefault();

		const { getRequestToken } = this.props.actions;

		getRequestToken();
	}

	handleRedriect = (url) => {
		window.location.href = url;
	}

	componentDidUpdate(prevProps) {

		const hasURL = _.has(this.props, 'status.result.url');
		if ( hasURL ) {
			this.handleRedriect(this.props.status.result.url);
		}
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
