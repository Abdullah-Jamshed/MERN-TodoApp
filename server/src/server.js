const express = require("express");
const app = express();
const cors = require("cors");

const authRoute = require("./routes/authRoute");

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
