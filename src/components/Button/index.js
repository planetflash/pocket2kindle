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
    const { text, loading } = this.props;

    const classes = classNames({
      btn: true,
      loading
    });

    return (
      <a
        className={classes}
        {...mergePropsWithAvailableProps(availableProps, this.props)}
      >
        <span className="text">{text}</span>
      </a>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool
};

export default Button;
