const INITIAL_STATE = {
  errorDetail: { id: null, status: null, msg: {} },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ERROR_DETAIL":
      return {
        ...state,
        errorDetail: action.payload.errorDetail,
      };
    case "ERROR_CLEAR":
      return {
        ...state,
        errorDetail: {},
      };
    default:
      return state;
  }
};
