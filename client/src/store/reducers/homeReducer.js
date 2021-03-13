const INITIAL_STATE = {
  value: "",
  videoList: [],
  selectedVideo: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "VALUE":
      return {
        ...state,
        value: action.payload.value,
      };
    case "VIDEOS":
      return {
        ...state,
        videoList: action.payload.items,
      };
    case "SELECTEDVIDEO":
      return {
        ...state,
        selectedVideo: action.payload.video,
      };
    // case "RESPONSE":
    //   return {
    //     ...state,
    //     response: action.payload.data,
    //   };
    default:
      return { ...state };
  }
};
