const errorDetail = (errorDetail) => {
  return (dispatch) => {
    dispatch({ type: "ERROR_DETAIL", payload: { errorDetail } });
  };
};
const errorClear = () => {
  return (dispatch) => {
    dispatch({ type: "ERROR_CLEAR" });
  };
};

export { errorDetail, errorClear };
