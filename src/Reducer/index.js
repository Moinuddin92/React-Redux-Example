import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { appendDataReducer } from "./appendDataReducer";
export const rootReducer = combineReducers({
  reducer,
  appendDataReducer
});
