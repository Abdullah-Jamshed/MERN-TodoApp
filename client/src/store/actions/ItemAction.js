import Api from "../../config/api/index";

// const clearTodos = (id) => {
//   return (dispatch) => {
//     dispatch({ type: "CLEAR_TODOS" });
//   };
// };

const fetchTodos = (id) => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });
    const { data } = await Api.get(`/items/todos/${id}`);
    dispatch({ type: "FECTH_TODOS", payload: { todos: data?.todos || [] } });
  };
};
const createTodo = (id, data) => {
  return (dispatch) => {
    // console.log(id, data);
    const config = {
      id,
      data,
    };
    Api.post(`/items/todos/create`, config).then(() => {
      dispatch({ type: "CREATE", payload: { newTodo: data } });
    });
  };
};

const deleteTodo = (id) => {
  return async (dispatch) => {
    // dispatch({ type: "" });
    const { data } = await Api.delete(`/items/todos/${id}`);
    console.log(data);
    // dispatch({ type: "DELETE", payload: { todos: data?.todos || [] } });
  };
};

export { fetchTodos, createTodo };
