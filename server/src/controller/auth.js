const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const signIn = async (req, res) => {
  const { email, password, googleId, name } = req.body;
  if (googleId) {
    const user = await userModel.findOne({ email });
    if (!user) {
      const user = new userModel({
        name,
        email,
        googleId,
      });
      user
        .save({ validateBeforeSave: false })
        .then(() => {
          res.json({
            id: user.id,
          });
        })
        .catch((error) => {
          res.status(400).json({
            msg: "user not created",
          });
        });
      return;
    }
    return res.json({
      id: user.id,
    });
  }

  const user = await userModel.findOne({ email });
  if (!user) return res.status(404).send("user not Found");
  bcrypt.compare(password, user.password, async (err, result) => {
    if (result) {
      const token = await jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: 3600 });
      return res.json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    }
    res.json({ msg: "invalid credentials" });
  });
};

const signUp = async (req, res) => {
  const { fullname, email, password } = req.body;
  if (fullname && email && password) {
    const exist = await userModel.findOne({ email });
    if (exist) return res.status(409).send("user Already exists");

    bcrypt.hash(password, 10, async (err, hash) => {
      const user = new userModel({
        name: fullname,
        email,
        password: hash,
      });

      user.validateSync(); // SYNC
      user
        .save()
        .then(async (user) => {
          const token = await jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: 3600 });
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        })
        .catch((validationResult) => {
          const { message } = validationResult.errors.name;
          res.send(message);
        });
    });
  }
};

module.exports = {
  signIn,
  signUp,
};
