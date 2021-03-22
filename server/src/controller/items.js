const TodoModel = require("../models/TodoModel");

const getTodos = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await TodoModel.findOne({ userId: id }).select("todos");
    res.json(user);
  } catch (err) {
    res.json({
      msg: "failed",
    });
  }
};

const addTodo = async (req, res) => {
  res.json({
    id: req.params.id,
  });
};

module.exports = {
  getTodos,
  addTodo,
};
