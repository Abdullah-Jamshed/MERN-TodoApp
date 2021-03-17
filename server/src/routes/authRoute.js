const express = require("express");
const authRoute = express.Router();

const { signIn, signUp } = require("../controller/auth");

authRoute.get("/", (req,res)=>{
    res.send("Auth Home")
});
authRoute.post("/signIn", signIn);
authRoute.post("/signUp", signUp);

module.exports = authRoute;
