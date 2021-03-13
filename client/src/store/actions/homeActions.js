const example = (value) => {
  return (dispatch) => {
    dispatch({ type: "EXAMPLE", payload: { value } });
  };
};

export { example };
