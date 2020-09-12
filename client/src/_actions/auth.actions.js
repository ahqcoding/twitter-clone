import { authConstants } from "../_constants/auth.constants";
import { authService } from "../_services/auth.service";
import { alertActions } from "./alert.actions";

function signin(user, onSignIn) {
  return (dispatch) => {
    dispatch(request({ user }));
    authService
      .signin(user)
      .then((data) => {
        dispatch(success(data));
        onSignIn();
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      });
  };

  function request(user) {
    return { type: authConstants.SIGNIN_REQUEST, user };
  }
  function success(user) {
    return { type: authConstants.SIGNIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: authConstants.SIGNIN_FAILURE, error };
  }
}

function signup(user, onSignUp) {
  return (dispatch) => {
    dispatch(request({ user }));
    authService
      .signup(user)
      .then((data) => {
        dispatch(success(data));
        onSignUp();
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      });
  };

  function request(user) {
    return { type: authConstants.SIGNUP_REQUEST, user };
  }
  function success(user) {
    return { type: authConstants.SIGNUP_SUCCESS, user };
  }
  function failure(error) {
    return { type: authConstants.SIGNUP_FAILURE, error };
  }
}

function signout() {
  return { type: authConstants.SIGNOUT };
}

export const authActions = {
  signin,
  signout,
  signup,
};
