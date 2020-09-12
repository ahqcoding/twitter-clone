import postConstants from "../_constants/post.constants";
import { alertActions } from "../_actions/alert.actions";

const initialState = { posts: [] };

export function posts(state = initialState, action) {
  switch (action.type) {
    case postConstants.ADD_POST_REQUEST:
      return {
        publishing: true,
        posts: state.posts,
      };
    case postConstants.ADD_POST_SUCCESS:
      return {
        published: true,
        posts: [action.post].concat(state.posts),
      };
    case postConstants.ADD_POST_FAILURE:
      return {
        posts: state.post,
        failure: true,
      };
    case postConstants.FETCH_POSTS_REQUEST:
      return {
        fetching: true,
        posts: state.posts,
      };
    case postConstants.FETCH_POSTS_SUCCESS:
      return {
        fetched: true,
        posts: action.posts.concat(state.posts),
      };
    case postConstants.FETCH_POSTS_FAILURE:
      return {
        failure: true,
        posts: state.posts,
      };
    default:
      return state;
  }
}
