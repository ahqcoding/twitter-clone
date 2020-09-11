import { combineReducers } from "redux";

import { authentication } from "./auth.reducer";
import { alert } from "./alert.reducer";
import { addPost } from "./post.reducer";
const rootReducer = combineReducers({
  authentication,
  alert,
  addPost,
});

export default rootReducer;
