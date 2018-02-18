import React from "react";
import { Router, Route } from "react-router";
import { Provider } from "react-redux";

import store, { history } from "./store";

import Pocket from "./domains/pocket/";

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Pocket} />
    </Router>
  </Provider>
);

export default routes;
