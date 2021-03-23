const mongoose = require("mongoose");
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

const deleteTodo = async (req, res) => {
  const userId = req.params.id;
  console.log("userId  ===>>>> ", userId);
  console.log("objId  ===>>>> ", req.body.iddel);
  try {
    // const daaaa = await TodoModel.findOneAndUpdate({ userId }, { $pull: { todos: { $elemMatch: { $et: { id: req.body.id } } } } });
    TodoModel.updateOne({ userId }, { $pull: { todos: { $eleMatch: { id: req.body.iddel } } } }, function (err, data) {
      if (err)
        res.render("error", {
          message: "Sorry failed to delete card id in users",
          error: { status: err, stacks: "failed to delete card id in users" },
        });
      res.json(data);
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

const addTodo = async (req, res) => {
  console.log("route work");
  const { id, data } = req.body;
  const exist = await TodoModel.findOne({ userId: id });
  if (!exist) {
    const item = new TodoModel({
      userId: id,
      todos: [
        {
          id: mongoose.Types.ObjectId(),
          title: data.title,
          discription: data.discription,
        },
      ],
    });
    item
      .save()
      .then(() => {
        console.log("create");
        return res.json({
          msg: "todo added",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          msg: "todo not added",
        });
      });
    return;
  }

  TodoModel.updateOne({ userId: id }, { $push: { todos: { ...data, id: mongoose.Types.ObjectId() } } })
    .then(() => {
      res.json({
        msg: "todo added",
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
};
