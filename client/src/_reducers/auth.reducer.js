import { authConstants } from "../_constants/auth.constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user: user.user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case authConstants.SIGNIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case authConstants.SIGNIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case authConstants.SIGNIN_FAILURE:
      return {};
    case authConstants.SIGNOUT:
      return {};
    default:
      return state;
  }
}

export function signup(state = {}, action) {
  switch (action.type) {
    case authConstants.SIGNUP_REQUEST:
      return {
        registering: true,
      };
    case authConstants.SIGNUP_SUCCESS:
      return {
        registered: true,
      };
    case authConstants.SIGNUP_FAILURE:
      return {
        failed: true,
        error: action.error,
      };
    default:
      return state;
  }
}
