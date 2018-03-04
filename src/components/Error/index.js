import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";

import Fade from "transitions/Fade";
import Slide from "transitions/Slide";

import styles from "./style.scss";

const Error = ({ message }) => {
  const showError = message ? true : false;

  return (
    <div styleName="error">
      <Fade in={showError}>{message}</Fade>
      <Slide in={showError}>{message}</Slide>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired
};

export default CSSModules(Error, styles);
