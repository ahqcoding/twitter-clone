import { getToken } from "../_helpers/auth.helpers";

function publish(post) {
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

export const postService = {
  publish,
};
