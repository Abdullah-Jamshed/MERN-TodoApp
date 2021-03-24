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
    const config = {
      id,
      data,
    };
    Api.post(`/items/todos/create`, config).then((res) => {
      dispatch({ type: "CREATE", payload: { newTodo: res.data } });
    });
  };
};

const deleteTodo = (id, itemId) => {
  return async (dispatch) => {
    Api.put(`/items/todos/${id}`, {
      _id: itemId,
    })
      .then(() => {
        dispatch({ type: "DELETE", payload: { itemId } });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export { fetchTodos, createTodo, deleteTodo };
