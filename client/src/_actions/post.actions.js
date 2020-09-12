import postService from "../_services/post.service";
import postConstants from "../_constants/post.constants";

function addPost(post) {
  return (dispatch) => {
    dispatch(request(post));
    postService
      .addPost(post)
      .then((data) => {
        dispatch(success(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(failure(error.toString()));
      });
  };

  function request(post) {
    return { type: postConstants.ADD_POST_REQUEST, post };
  }
  function success(post) {
    return { type: postConstants.ADD_POST_SUCCESS, post };
  }
  function failure(error) {
    return { type: postConstants.ADD_POST_FAILURE, error };
  }
}

function fetchPosts() {
  return (dispatch) => {
    dispatch(request());
    postService
      .fetchPosts()
      .then((data) => {
        dispatch(success(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(failure(error.toString()));
      });
  };

  function request() {
    return { type: postConstants.FETCH_POSTS_REQUEST };
  }
  function success(posts) {
    return { type: postConstants.FETCH_POSTS_SUCCESS, posts };
  }
  function failure(error) {
    return { type: postConstants.FETCH_POSTS_FAILURE, error };
  }
}

const postActions = {
  addPost,
  fetchPosts,
};

export default postActions;
