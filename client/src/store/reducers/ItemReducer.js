const INITIAL_STATE = {
  todos: [],
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "CLEAR_TODOS":
      return {
        ...state,
        todos: [],
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
      const newList = state.todos.filter((item) => item._id !== action.payload.itemId);
      return {
        ...state,
        todos: newList,
      };

    default:
      return state;
  }
};
