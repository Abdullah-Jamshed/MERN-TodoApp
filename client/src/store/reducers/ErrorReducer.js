const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOW_PASSWORD":
      return {
        ...state,
        showPassword: action.payload.showPassword,
      };

    default:
      return state;
  }
};
