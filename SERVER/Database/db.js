const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const ConnectDb = async () => {
  await mongoose.connect(process.env.MONGO_DB_URI).then(() => {
    console.log("Database connected successfully");
  });
};

module.exports = ConnectDb;
