import { publish } from "../_actions/post.actions";
import {postConstants} from "../_constants/post.constants";

const initialState = [];

export function publish(state = initialState, action) {
    switch(action.type) {
        case postConstants.
    }
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
