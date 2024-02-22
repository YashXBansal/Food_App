const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongodb = require("./Database/db");
const cors = require('cors')
dotenv.config();
const PORT = process.env.PORT;
mongodb();
app.use(cors());
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));

app.get("/", (req, res) => {
  res.send("hehehe");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
