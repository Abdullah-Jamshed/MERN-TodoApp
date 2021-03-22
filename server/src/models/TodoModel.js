const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  register_date: {
    type: Date,
    default: Date.now,
  },
  todos: { type: Array, default: [] },
  googleId: String,
});

const TodoModel = mongoose.model("items", Schema);

module.exports = TodoModel;
