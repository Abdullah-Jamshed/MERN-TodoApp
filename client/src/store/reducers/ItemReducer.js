const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE":
      return {
        ...state,
        errorDetail: action.payload.errorDetail,
      };

    default:
      return state;
  }
};
