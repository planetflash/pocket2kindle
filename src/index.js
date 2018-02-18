import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import routes from "./routes";

// Styles
import "./reset.css";
import "./main.scss";

render(<AppContainer>{routes}</AppContainer>, document.getElementById("app"));
