import Api from "../../config/api/index";

const selectItemObj = (obj) => {
  return (dispatch) => {
    dispatch({ type: "SELECT_ID", payload: { obj } });
  };
};

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

const updateTodo = (id, obj) => {
  return async (dispatch) => {
    Api.put(`/items/todos/edit/${id}`, {
      _id: obj._id,
      title: obj.title,
      discription: obj.discription,
    })
      .then((res) => {
        dispatch({ type: "EDIT", payload: { editObj: res.data } });
      })
      .catch((err) => {
        console.log(err);
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

export { fetchTodos, createTodo, deleteTodo, selectItemObj, updateTodo };
