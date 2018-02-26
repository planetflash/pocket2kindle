import React from "react";
import PropTypes from "prop-types";

import Fade from "transitions/Fade";

import "./style.scss";

const Error = ({ message }) => {
  const showError = message ? true : false;

  return (
    <div className="error">
      <Fade in={showError}>{message}</Fade>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired
};

export default Error;
