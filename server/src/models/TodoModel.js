const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  userId: { type: String, required: true },
  todos: { type: Array, default: [] },
});

const TodoModel = mongoose.model("items", Schema);

module.exports = TodoModel;
