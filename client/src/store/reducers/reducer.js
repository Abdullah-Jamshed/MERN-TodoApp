import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import FormReducer from "./FormReducer";
import ErrorReducer from "./ErrorReducer";
import ItemReducer from "./ItemReducer";

export default combineReducers({
  AuthReducer,
  FormReducer,
  ErrorReducer,
  ItemReducer,
});
