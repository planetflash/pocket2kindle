import React from "react";
import PropTypes from "prop-types";

import Fade from "transitions/Fade";
import Slide from "transitions/Slide";

import "./style.scss";

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

export default Error;
