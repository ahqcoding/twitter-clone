import postService from "../_services/post.service";
import postConstants from "../_constants/post.constants";

export function publish(post) {
  return (dispatch) => {
    dispatch(request(post));
    postService
      .publish(post)
      .then((data) => {
        dispatch(success(data));
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
      });
  };

  function request(post) {
    return { type: postConstants.PUBLISH_REUQEST, post };
  }
  function success(post) {
    return { type: postConstants.PUBLISH_SUCCESS, post };
  }
  function failure(error) {
    return { type: postConstants.PUBLISH_FAILURE, error };
  }
}
