import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import "./shake.scss";

const duration = 1000;

const Shake = ({ in: inProp, children }) => {
  return (
    <CSSTransition in={inProp} timeout={duration} classNames="shake">
      <div>{children}</div>
    </CSSTransition>
  );
};

Shake.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default Shake;
