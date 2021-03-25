const mongoose = require("mongoose");
const TodoModel = require("../models/TodoModel");
// const NewItemSchema = require("../models/NewItem");

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

const editTodo = async (req, res) => {
  const userId = req.params.id;
  const _id = mongoose.Types.ObjectId(req.body._id);
  try {
    const exist = await TodoModel.findOne({ todos: { $elemMatch: { _id } } });
    if (!exist) return res.status(404).json({ msg: "Item not found" });

    await TodoModel.updateOne({ "todos._id": _id }, { $set: { "todos.$": { ...req.body, _id } } });

    return res.json({ ...req.body, _id });
  } catch (error) {
    return res.status(400).json("failed");
  }
};

const deleteTodo = async (req, res) => {
  const userId = req.params.id;
  const _id = mongoose.Types.ObjectId(req.body._id);
  try {
    const exist = await TodoModel.findOne({ todos: { $elemMatch: { _id } } });
    if (!exist) return res.status(404).json({ msg: "Item not found" });

    const data = await TodoModel.updateOne({ userId }, { $pull: { todos: { _id } } });
    return res.json({
      msg: "item deleted",
    });
  } catch (error) {
    return res.status(400).json("failed");
  }
};

const addTodo = async (req, res) => {
  const _id = mongoose.Types.ObjectId();
  const { id, data } = req.body;
  const exist = await TodoModel.findOne({ userId: id });
  if (!exist) {
    const item = new TodoModel({
      userId: id,
      todos: [
        {
          _id,
          title: data.title,
          discription: data.discription,
        },
      ],
    });
    item
      .save()
      .then(() => {
        return res.json({
          _id,
          title: data.title,
          discription: data.discription,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "todo not added",
        });
      });
    return;
  }

  TodoModel.updateOne({ userId: id }, { $push: { todos: { ...data, _id } } })
    .then(() => {
      res.json({
        _id,
        title: data.title,
        discription: data.discription,
      });
    })
    .catch((err) => {
      res.status(400).json({
        msg: "todo not added",
      });
    });
};

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  editTodo,
};
