import Api from "../../config/api/index";

const create = (detail) => {
  return (dispatch) => {
    dispatch({ type: "CREATE", payload: { detail } });
  };
};
const errorClear = () => {
  return (dispatch) => {
    dispatch({ type: "ERROR_CLEAR" });
  };
};

export { errorDetail, errorClear };
