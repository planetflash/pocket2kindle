import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Button extends React.Component {

	render() {
		return (
			<a
				className="btn"
				onClick={this.props.onClick}
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
	onClick: PropTypes.func,
};

export default Button;
