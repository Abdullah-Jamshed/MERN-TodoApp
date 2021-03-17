const signIn = (req, res) => {
  console.log("signIn Body ==>>> ", req.body);
  res.send("SignIn");
};

const signUp = (req, res) => {
    console.log("signUp Body ==>>> ", req.body);
  res.send("SignUp");
};

module.exports = {
  signIn,
  signUp,
};
