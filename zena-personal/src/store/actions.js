export const ACTION_TYPES = {
  SET_API_LIST: "set API list",
  SET_IS_LOADING: "set is loading"
};

export const setApiList = (apis = []) => ({
  type: ACTION_TYPES.SET_API_LIST,
  payload: apis
});

export const setIsLoadingApiList = (isLoading = false) => ({
  type: ACTION_TYPES.SET_API_LIST,
  payload: isLoading
});

// Thunk to fetch GitHub Events

export const fetchGitHubEvents = (dispatch, username) => {
  const API_URL = `https://api.github.com/users/${username}/events`;

  return fetch(API_URL)
    .then(res => (res.status === 200 ? res.json() : setLoading(false)))
    .then(data => {
      dispatch(setApiList(data));
      dispatch(setIsLoadingApiList(true));
      // setRepos(data);
      // setLoading(true);
    })
    .catch(err => console.log(err.message));
};
