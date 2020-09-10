export const getAuthData = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const isAuthenticated = () => {
  let user = getAuthData();
  if (user) {
    return true;
  }
  return false;
};

export const getToken = () => {
  let user = getAuthData();
  return user.token || null;
};
