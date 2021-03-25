import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import FormReducer from "./FormReducer";
import ItemReducer from "./ItemReducer";

export default combineReducers({
  AuthReducer,
  FormReducer,
  ItemReducer,
});
