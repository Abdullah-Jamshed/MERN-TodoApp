const express = require("express");

const itemsRoute = express.Router();

// middleware
// const auth = require("../middleware/auth");

const { getTodos, addTodo, deleteTodo } = require("../controller/items");

itemsRoute.get("/", (req, res) => {
  res.json({
    msg: "hello from server",
  });
});

itemsRoute.get("/todos/:id", getTodos);
itemsRoute.post("/todos/create", addTodo);
itemsRoute.put("/todos/:id", deleteTodo);

module.exports = itemsRoute;
