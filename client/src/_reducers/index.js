import { combineReducers } from "redux";

import { authentication, signup } from "./auth.reducer";
import { alert } from "./alert.reducer";
import { posts } from "./post.reducer";
const rootReducer = combineReducers({
  authentication,
  signup,
  alert,
  posts,
});

export default rootReducer;
