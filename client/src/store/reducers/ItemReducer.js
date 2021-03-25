const INITIAL_STATE = {
  todos: [],
  isLoading: false,
  selectedObj: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SELECT_ID":
      return {
        ...state,
        selectedObj: action.payload.obj,
      };

    case "FECTH_TODOS":
      return {
        ...state,
        todos: action.payload.todos,
        isLoading: false,
      };
    case "CREATE":
      return {
        ...state,
        todos: [...state.todos, action.payload.newTodo],
      };
    case "DELETE":
      var newList = state.todos.filter((item) => item._id !== action.payload.itemId);
      return {
        ...state,
        todos: newList,
      };
    case "EDIT":
      var newList = state.todos.map((item) => {
        if (item._id == action.payload.editObj._id) return action.payload.editObj;
        return item;
      });
      return {
        ...state,
        todos: newList,
      };

    default:
      return state;
  }
};
