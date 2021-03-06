const INITIAL_STATE = {
  signUpFormValues: {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  signInFormValues: {
    email: "",
    password: "",
  },
  showPassword: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOW_PASSWORD":
      return {
        ...state,
        showPassword: action.payload.showPassword,
      };
    case "SIGN_UP_FIELD_VALUE":
      return {
        ...state,
        signUpFormValues: action.payload.fieldValues,
      };
    case "SIGN_IN_FIELD_VALUE":
      return {
        ...state,
        signInFormValues: action.payload.fieldValues,
      };
    case "LOGOUT":
      localStorage.removeItem("profile");
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};
