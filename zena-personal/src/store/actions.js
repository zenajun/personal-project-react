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
