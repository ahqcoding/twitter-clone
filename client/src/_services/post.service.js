import { getToken } from "../_helpers/auth.helpers";

function addPost(post) {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + getToken(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  };

  return fetch("/api/posts/new", requestOptions)
    .then(handleResponse)
    .then((post) => {
      return post;
    });
}

function fetchPosts() {
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + getToken(),
      "Content-Type": "application/json",
    },
  };

  return fetch("/api/posts/feed/", requestOptions)
    .then(handleResponse)
    .then((posts) => {
      return posts;
    });
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

const postService = {
  addPost,
  fetchPosts,
};

export default postService;
