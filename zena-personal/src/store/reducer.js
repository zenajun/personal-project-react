import { ACTION_TYPES } from "./actions";

export const INITIAL_STATE = {
  isLoaded: false,
  api: []
};

export const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_API_LIST:
      return { ...state, api: action.payload };
    case ACTION_TYPES.SET_IS_LOADING:
      return { ...state, isLoaded: action.payload };

    default:
      return state;
  }
};
