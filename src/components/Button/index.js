import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Button extends React.Component {

	render() {
		return (
			<a
				className="btn"
				{...this.props}
			>
				{ this.props.children }
			</a>
    )
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string,
	]),
}

export default Button;
