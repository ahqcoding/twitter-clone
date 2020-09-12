import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Explore from "./Explore/Explore";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
export default function MainRouter() {
  return (
    <Fragment>
      <Switch>
        <Route path="/signin" component={SignIn} />

        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/explore" component={Explore} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Fragment>
  );
}
