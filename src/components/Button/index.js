import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { mergePropsWithAvailableProps } from "../../utils";
import events from "../events";

const availableProps = {
  ...events.mouse,
  ...events.touch
};

import "./style.scss";

class Button extends React.Component {
  render() {
    const classes = classNames({
      btn: true,
      loading: this.props.loading
    });

		const testChange = 'change 2'

    return (
      <a
        className={classes}
        {...mergePropsWithAvailableProps(availableProps, this.props)}
      >
        {this.props.children}
      </a>
    );
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClick: PropTypes.func,
  loading: PropTypes.bool
};

export default Button;
