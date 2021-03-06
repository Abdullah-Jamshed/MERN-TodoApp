const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  register_date: {
    type: Date,
    default: Date.now,
  },
  googleId: String,
});

const userModel = mongoose.model("users", Schema);

module.exports = userModel;
