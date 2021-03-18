const showPasswordAction = (showPassword) => {
  return (dispatch) => {
    dispatch({ type: "SHOW_PASSWORD", payload: { showPassword } });
  };
};

const handleSignUpField = (fieldValues) => {
  return (dispatch) => {
    dispatch({ type: "SIGN_UP_FIELD_VALUE", payload: { fieldValues } });
  };
};

const handleSignInField = (fieldValues) => {
  return (dispatch) => {
    dispatch({ type: "SIGN_IN_FIELD_VALUE", payload: { fieldValues } });
  };
};

// const auth = (obj) => {
//   return (dispatch) => {
//     dispatch({ type: "AUTH", payload: { obj } });
//   };
// };

const logoutAction = () => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT" });
  };
};

export { showPasswordAction, handleSignUpField, handleSignInField, logoutAction };
