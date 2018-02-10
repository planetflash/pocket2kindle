import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

	render() {

		return (
			<button className="btn">
				{ this.props.children }
			</button>
    )
  }
}

Button.propTypes = {
  children: PropTypes.element,
};

export default Button;
