const mongoose = require("mongoose");
const uri =
  process.env.CONNECTION_STRING ||
  "mongodb+srv://mahdi:Or4BzOjuGdFw7LES@cluster0.qvkvi.mongodb.net/";

const dbConnection = async () => {
  try {
    await mongoose.connect(uri);
    console.log(uri);
    console.log("Connected to database:", mongoose.connection.readyState);
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};

module.exports = dbConnection;
