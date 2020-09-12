import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../_helpers/auth.helpers";
export default function PrivateRoute({ component: Component, roles, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated()) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{ pathname: "/signin", state: { from: props.location } }}
            />
          );
        }

        // logged in so return component
        return <Component {...props} />;
      }}
    />
  );
}
