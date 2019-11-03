export const ACTION_TYPES = {
  SET_API_LIST: "set API list",
  SET_IS_LOADING: "set is loading",
  USER_NOT_FOUND: "user not found"
};

export const setApiList = (apis = []) => ({
  type: ACTION_TYPES.SET_API_LIST,
  payload: apis
});

export const setIsLoadingApiList = (isLoading = false) => ({
  type: ACTION_TYPES.SET_IS_LOADING,
  payload: isLoading
});

export const setUserNotFound = (status = false) => ({
  type: ACTION_TYPES.USER_NOT_FOUND,
  payload: status
});

// Thunk to fetch GitHub Events
export const fetchGitHubEvents = username => dispatch => {
  const API_URL = `https://api.github.com/users/${username}/events`;

  return fetch(API_URL)
    .then(res => {
      if (res.status === 200) {
        dispatch(setUserNotFound(false));
        return res.json();
      } else {
        dispatch(setUserNotFound(true));
      }
    })
    .then(data => {
      dispatch(setApiList(data));
      dispatch(setIsLoadingApiList(true));
    })
    .catch(err => console.log(err.message));
};
