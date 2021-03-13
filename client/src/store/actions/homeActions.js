const search = (value) => {
  return (dispatch) => {
    dispatch({ type: "VALUE", payload: { value } });
  };
};
const videos = (items) => {
  return (dispatch) => {
    dispatch({ type: "VIDEOS", payload: { items } });
  };
};
const videoSelect = (video) => {
  return (dispatch) => {
    dispatch({ type: "SELECTEDVIDEO", payload: { video } });
  };
};


// const response = (data) => {
//   return (dispatch) => {
//     dispatch({ type: "RESPONSE", payload: { data } });
//   };
// };

export { search, videos, videoSelect };
