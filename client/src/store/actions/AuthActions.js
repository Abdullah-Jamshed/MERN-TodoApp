import auth from "../../config/api/auth";

const loadUser = () => {
  return async (dispatch) => {
    dispatch({ type: "USER_LOADING" });

    try {
      const { data: userData } = await auth.get("/auth");
      dispatch({ type: "USER_LOADED", payload: { userData } });
    } catch (err) {
      dispatch({ type: "AUTH_ERROR" });
    }
  };
};

const successLogin = (data) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: { data } });
  };
};

const successSignup = (data) => {
  return (dispatch) => {
    dispatch({ type: "SIGNUP_SUCCESS", payload: { data } });
  };
};

const logout = () => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT_SUCCESS" });
  };
};

export { loadUser, successLogin, successSignup, logout };
