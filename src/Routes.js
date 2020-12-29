import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import TnC from "./TermsConditions";
import Disclaimer from "./Disclaimer";
import Privacy from "./Privacy";
import RefundPolicy from "./RefundPolicy";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/terms" exact component={TnC} />
        <Route path="/disclaimer" exact component={Disclaimer} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/refund-policy" exact component={RefundPolicy} />
      </Switch>
    </Router>
  );
};

export default Routes;
