const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
    });

    console.log("Database connected successfully");

    const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
    const foodCategoryData = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

    global.food_items = fetchedData;
    global.foodCategory = foodCategoryData;
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = ConnectDb;
