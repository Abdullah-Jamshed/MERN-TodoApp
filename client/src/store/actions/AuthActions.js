const isLoading = () => {
  return (dispatch) => {
    dispatch({ type: "USER_LOADING" });
  };
};

const userLoaded = (userData) => {
  return (dispatch) => {
    dispatch({ type: "USER_LOADED", payload: { userData } });
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

const failedLogin = () => {
  return (dispatch) => {
    dispatch({ type: "LOGIN_FAILED" });
  };
};

const failedSignup = () => {
  return (dispatch) => {
    dispatch({ type: "SIGNUP_FAILED" });
  };
};

const failedSignup = () => {
  return (dispatch) => {
    dispatch({ type: "SIGNUP_FAILED" });
  };
};

const logout = () => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT_SUCCESS" });
  };
};

const authError = () => {
  return (dispatch) => {
    dispatch({ type: "AUTH_ERROR" });
  };
};

export { isLoading, userLoaded, successLogin, successSignup, failedLogin, failedSignup, logout, authError };
