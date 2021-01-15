import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import weightReducer from "./weightReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  auth: authReducers,
  errors: errorReducers,
  weight: weightReducer,
  loading: loadingReducer,
  user_measures: weightReducer,
})