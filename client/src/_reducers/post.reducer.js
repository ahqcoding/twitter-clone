import postConstants from "../_constants/post.constants";

const initialState = { posts: [] };

export function addPost(state = initialState, action) {
  switch (action.type) {
    case postConstants.ADD_POST_REQUEST:
      return {
        publishing: true,
        posts: action.posts,
      };
    case postConstants.ADD_POST_SUCCESS:
      return {
        published: true,
        posts: action.posts,
      };
    case postConstants.ADD_POST_FAILURE:
      return {
        posts: action.posts,
        failure: true,
      };
    default:
      return state;
  }
}
