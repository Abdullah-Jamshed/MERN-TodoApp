const INITIAL_STATE = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem("MERN_TodoApp_Token"),
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_LOADED":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.userData,
      };

    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      localStorage.setItem("MERN_TodoApp_Token", action.payload.data.token);
      return {
        ...state,
        ...action.payload.data,
        isAuthenticated: true,
        isLoading: false,
      };

    case "LOGIN_FAILED":
    case "SIGNUP_FAILED":
    case "LOGOUT_SUCCESS":
    case "AUTH_ERROR":
      localStorage.removeItem("MERN_TodoApp_Token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return { ...state };
  }
};
