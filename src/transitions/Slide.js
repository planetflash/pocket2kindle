import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import "./slide.scss";

const duration = {
  enter: 500,
  exit: 300
};

const Slide = ({ in: inProp, children }) => {
  return (
    <CSSTransition in={inProp} timeout={duration} classNames="slide">
      <div>{children}</div>
    </CSSTransition>
  );
};

Slide.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default Slide;
