const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("profile", JSON.stringify(action.payload.obj));
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};
