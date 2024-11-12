require("dotenv").config();

const mongoose = require("mongoose");


// const connection = mongoose.connect(process.env.URL)
const connection = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Connected to MongoDB Atlas successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
};

module.exports = { connection };
