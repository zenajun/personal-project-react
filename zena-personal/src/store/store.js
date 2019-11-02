import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { apiReducer } from "./reducer";

export const store = createStore(apiReducer, applyMiddleware(reduxThunk));
