const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "EXAMPLE":
      return {
        ...state,
        example: action.payload.example,
      };
    default:
      return { ...state };
  }
};
