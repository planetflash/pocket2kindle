import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import routes from "./routes";

import "./sass/theme.scss";

render(<AppContainer>{routes}</AppContainer>, document.getElementById("app"));
