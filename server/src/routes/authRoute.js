const express = require("express");
const authRoute = express.Router();
const UserModel = require("../models/userModel");

// middleware
const auth = require("../middleware/auth");

const { signIn, signUp } = require("../controller/auth");

authRoute.get("/", auth, async (req, res) => {
  if (req?.sub) {
    const user = await UserModel.findOne({ googleId: req.sub });
    if (!user) return res.status(404).json({ msg: "User Not Found" });
    return res.json({ id: user.id, name: user.name, email: user.email });
  }
  const user = await UserModel.findById(req.userId).select("-password");
  if (!user) return res.status(404).json({ msg: "User Not Found" });
  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
  });
});

authRoute.post("/signIn", signIn);
authRoute.post("/signUp", signUp);

module.exports = authRoute;
