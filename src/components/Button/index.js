import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { mergePropsWithAvailableProps } from "utils";
import events from "events";
import Shake from "transitions/Shake";

const availableProps = {
  ...events.mouse,
  ...events.touch
};

import "./style.scss";

class Button extends React.Component {
  render() {
    const { text, loading, error } = this.props;

    const classes = classNames({
      btn: true,
      loading
    });

    return (
      <Shake in={error}>
        <a
          className={classes}
          {...mergePropsWithAvailableProps(availableProps, this.props)}
        >
          <span className="text">{text}</span>
        </a>
      </Shake>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool
};

export default Button;
