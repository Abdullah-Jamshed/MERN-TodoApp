const INITIAL_STATE = {
  signUpFormValues: {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  },
  signInFormValues: {
    email: "",
    password: "",
    showPassword: false,
  },
  auth: null,
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
    case "AUTH":
      localStorage.setItem("profile", JSON.stringify(action.payload.obj));
      console.log(JSON.stringify(action.payload.obj));
      return {
        ...state,
        auth: action.payload.obj,
      };
    case "LOGOUT":
      localStorage.removeItem("profile");
      return {
        ...state,
        user: null,
      };
    default:
      return { ...state };
  }
};
