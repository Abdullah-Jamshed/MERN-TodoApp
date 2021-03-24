const mongoose = require("mongoose");

const NewItemSchema = mongoose.Schema({
  id: Number,
  title: String,
  discription: String,
});

module.exports = NewItemSchema;
