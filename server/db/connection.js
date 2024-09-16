const mongoose = require("mongoose");
const uri =
  process.env.CONNECTION_STRING || "mongodb://localhost:27017/members";

const dbConnection = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected :)))");
  } catch (error) {
    console.log("it failed :((", error);
  }
};

module.exports = dbConnection;
