import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import MenuBar from "./MenuBar";
import Explore from "./Explore/Explore";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/Signup";

export default function MainRouter() {
  return (
    <Fragment>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/explore">
          <MenuBar />
          <Explore />
        </Route>
        <Route path="/">
          <MenuBar />
          <Home />
        </Route>
      </Switch>
    </Fragment>
  );
}
