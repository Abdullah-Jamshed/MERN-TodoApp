import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import FormReducer from "./FormReducer";
import ErrorReducer from "./ErrorReducer";

export default combineReducers({
  AuthReducer,
  FormReducer,
  ErrorReducer,
});
