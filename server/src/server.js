const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "../.env" });

// ROUTES
const authRoute = require("./routes/authRoute");
const itemsRoute = require("./routes/itemsRoute");

const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("<<<<<======== Connection is Established....========>>>>>>>>");
  })
  .on("error", (err) => {
    console.log("Err: ", err);
  });

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello From Server");
});

app.use("/auth", authRoute);
app.use("/items", itemsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
