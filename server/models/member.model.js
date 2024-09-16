const mongoose = require("mongoose");
const { type } = require("os");

// define schema
const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: false,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "I'd rather not say"],
    default: "Male",
    require: true,
  },
  exp: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    enum: ["Part Time", "Full Time"],
    default: "Part Time",
    require: true,
  },
  qualification: {
    type: String,
    require: false,
  },
});
const Member = mongoose.model("member", memberSchema);
module.exports = memberSchema;
