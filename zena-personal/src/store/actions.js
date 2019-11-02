export const ACTION_TYPES = {
  SET_API_LIST: "set API list",
  SET_IS_LOADING: "set is loading"
};

export const setApiList = (apis = []) => ({
  type: ACTION_TYPES.SET_API_LIST,
  payload: apis
});

export const setIsLoadingApiList = (isLoading = false) => ({
  type: ACTION_TYPES.SET_IS_LOADING,
  payload: isLoading
});

// Thunk to fetch GitHub Events

export const fetchGitHubEvents = username => dispatch => {
  const API_URL = `https://api.github.com/users/${username}/events`;

  return (
    fetch(API_URL)
      // .then(res =>
      //   res.status === 200 ? res.json() : dispatch(setIsLoadingApiList(false))
      // )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(setApiList(data));
        dispatch(setIsLoadingApiList(true));
      })
      .catch(err => console.log(err.message))
  );
};
