import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Button extends React.Component {

	render() {

		const classes = classNames({
      btn: true,
      loading: this.props.loading,
    });

		return (
			<a
				onClick={this.props.onClick}
				className={classes}
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
	loading: PropTypes.bool,
}

export default Button;
