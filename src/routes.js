import React from "react";
import { Router, Route } from "react-router";
import { Provider } from "react-redux";

import store, { history } from "./store";

import Pocket from "./containers/pocket/";
import GitHub from "./containers/github/";

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Pocket} />
      <Route path="/github" component={GitHub} />
    </Router>
  </Provider>
);

export default routes;
