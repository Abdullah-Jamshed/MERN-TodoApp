const mongoose = require("mongoose");

// Without Validation
const UserSignUpSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("users", UserSignUpSchema);

module.exports = userModel;
